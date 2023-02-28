import { META_TAGS } from '@/content/metaTag'

export default function SocialMediaMetaTags () {
    return (
        <>
            <title>I am {META_TAGS.title}</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content="Experienced Full Stack Developer proficient in React.js, Next.js, Laravel, PHP, JavaScript, MySQL, TailwindCSS, Flask, Python, Flutter, and more." />
            <link rel="icon" href="" />
              {/* Facebook and linkedin */}
            <meta property={`og:title`} content={META_TAGS.facebook.title}/>
            <meta property={`og:description`} content={META_TAGS.facebook.description}/>
            <meta property={`og:image`} content={META_TAGS.facebook.image}/>
            <meta property={`og:url`} content={META_TAGS.facebook.url}/>
            <meta property={`og:type`} content={`website`}/>

            {/* Twitter */}

            <meta name="twitter:card" content={META_TAGS.twitter.card}/>
            <meta name="twitter:site" content={META_TAGS.twitter.site} />
            <meta name="twitter:title" content={META_TAGS.twitter.creator}/>
            <meta name="twitter:description" content={META_TAGS.twitter.card}/>
            <meta name="twitter:image" content=""/>


        </>
    )
}