// The loader can be found at ./lib/loader.js
// It is configured on each <Image/> component (next/image)
// Cf. https://nextjs.org/docs/api-reference/next/image#loader
export default function loader ({ src /*, width, quality */ }) {
    // return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
    return src;
}
