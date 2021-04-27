import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kyle Parry's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Kyle Parry
        </h1>
        <Image
          src="/images/profile.jpg" // Route of the image file
          height={200} // Desired size with correct aspect ratio
          width={200} // Desired size with correct aspect ratio
          alt="Kyle Parry"
        />

        <div className="grid">
          <a href="/about" className="card">
            <h3>About Me</h3>
          </a>

          <a href="https://coffee-roulette-kp.herokuapp.com/" className="card">
            <h3>Coffee Roulette</h3>
          </a>

          <a
            href="https://crypto-tracker-tool.herokuapp.com/"
            className="card"
          >
            <h3>Crypto Tracker</h3>
          </a>

          <a
            href="/ski"
            className="card"
          >
            <h3>Ski Instructor</h3>
          </a>
        </div>
      </main>

      <footer>
        <h1>
          <Link href="mailto:kyle.parry.303@gmail.com">
            <img src="/images/email.png" alt="email" className="icon" />
          </Link>
          {/* Email */}

          <Link href="https://www.linkedin.com/in/parryk303/">
            <img src="/images/linkedin.png" alt="linkedin" className="icon" />
          </Link>
          {/* LinkedIn */}

          <Link href="https://github.com/parryk303">
            <img src="/images/github.png" alt="github" className="icon" />
          </Link>
          {/* GitHub */}

          <Link href="https://www.facebook.com/profile.php?id=10238263">
            <img src="/images/facebook.png" alt="facebook" className="icon" />
          </Link>
          {/* Facebook */}
        </h1>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0 0 3rem 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-image: url(/images/mountain.jpg);
          background-size: cover;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
