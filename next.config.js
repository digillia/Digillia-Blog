module.exports = {
    images: {
        // The loader can be found at ./lib/loader.js
        // It is configured on each <Image/> component (next/image)
        // Cf. https://nextjs.org/docs/api-reference/next/image#loader
        loader: 'custom',
    },
    // https://nextjs.org/docs/api-reference/next.config.js/disabling-x-powered-by
    poweredByHeader: false,
    // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
    reactStrictMode: true,
}
