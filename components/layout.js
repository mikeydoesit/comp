import Head from 'next/head'
import Link from 'next/link'
import mainStyles from '../styles/main.module.css'

export const siteTitle = "Calculate your take home pay from your gross salary"

export default function Layout({ children, home }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta 
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header>
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </nav>
            </header>
            <main className={mainStyles.mainContainer}>
                {home ? (
                    <>
                        <div className={mainStyles.formContent}>
                            <h1>Salary Computer</h1>
                            <p>Calculate your take home pay from your gross salary</p>
                            <form>

                            </form>
                        </div>
                    </>
                ) : (
                    <>
                        {children}
                    </>
                )}
            </main>
            <footer>
            {!home && (
                    <div>
                        <Link href="/">
                            <a>Back to home</a>
                        </Link>
                    </div>
                )}
                <span>Disclaimer: Although there are a number of financial tools online, please do not under any circumstance let this constitute as legitimate financial advice</span>
            </footer>
        </>
    )
}