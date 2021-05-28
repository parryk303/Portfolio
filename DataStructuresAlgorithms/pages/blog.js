import Link from 'next/link'
import Head from 'next/head'

export default function Blog() {
  return (

    <div className="container">
      <Head>
        <title>Kyle Parry's Blog</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Electrolize&family=Fredericka+the+Great&family=Oswald:wght@600&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <section>
          <h2>
            <Link href="/">
              <a>home</a>
            </Link>
            <span> | </span>
            <Link href="/bio">
              <a>bio</a>
            </Link>
            <span> | </span>
            <Link href="/projects">
              <a>projects</a>
            </Link>
          </h2>
        </section>

        <h1 className="title">
          Data Structures and Algorithms
        </h1>

        <div className="grid">

          {/* ----------------- BLOG LIST ----------------- */}

          <div className="blog">
            <h2>Add Two Numbers</h2>
            <p>
              Problem:
              <br />
              <br />
              You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

              You may assume the two numbers do not contain any leading zero, except the number 0 itself.
              <br />
              <br />
              IOEC:
              <br />
              Input: nums = [1,1,2] Output: 2, nums = [1,2]
              <br />
              Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.
              <br />
              <br />
              Input: nums = [0,0,1,1,1,2,2,3,3,4] Output: 5, nums = [0,1,2,3,4]
              <br />
              Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.
              <br />
              Constraints: nums is sorted in ascending order.

              <br />
              <br />
              Solution:
              <br />
              <br />
              <iframe src="https://www.thiscodeworks.com/embed/60b1508a4c1a9e0014da887e" style={{ height: "400px" }} frameborder="0" />
            </p>
          </div>



          {/* ----------------- BLOG LIST ----------------- */}

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
        iframe {
          width: 100%;
        }
        .blog{
          margin: 1rem;
          flex-basis: 95%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          backdrop-filter: blur(4px);
          box-shadow:0 0 1rem 0 rgba(0, 0 , 0, .2);
          width: 85%;
        }
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
          backdrop-filter: blur(4px);
          box-shadow:0 0 1rem 0 rgba(0, 0 , 0, .2);
          width: 85%;
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
          font-family: 'Electrolize', sans-serif;font-family: 'Electrolize', sans-serif;
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