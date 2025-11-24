const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const postsDirectory = path.join(process.cwd(), 'content/blog');

function getBlogPost(slug) {
    if (!fs.existsSync(postsDirectory)) {
        console.log('Posts directory does not exist');
        return null;
    }

    const filePath = path.join(postsDirectory, `${slug}.md`);
    console.log('Looking for file at:', filePath);

    if (!fs.existsSync(filePath)) {
        console.log('File does not exist');
        return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    try {
        const htmlContent = marked(content);
        // Check if htmlContent is a promise
        if (htmlContent instanceof Promise) {
            console.log('marked returned a Promise');
            htmlContent.then(html => console.log('Resolved HTML length:', html.length));
        } else {
            console.log('marked returned string length:', htmlContent.length);
        }

        return {
            slug,
            title: data.title || slug,
            date: data.date || new Date().toISOString(),
            excerpt: data.excerpt,
            content: htmlContent,
        };
    } catch (error) {
        console.error('Error parsing markdown:', error);
        return null;
    }
}

const slug = 'kafka-kafka-everywhere';
console.log('Testing slug:', slug);
const post = getBlogPost(slug);
console.log('Post found:', !!post);
