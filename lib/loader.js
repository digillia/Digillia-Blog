//  https://nextjs.org/docs/api-reference/next/image#loader
export default function loader ({ src }) {
    // return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
    return src;
}
