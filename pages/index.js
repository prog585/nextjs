import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({allPostsData }) {
  return (
    <Layout home>
      <div style={{float:'left'}}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
</div><div style={{float:'right'}}>
      <section className={utilStyles.headingLg}>
        Hi, I'm Ali, a web and mobile developer 
        </section> 
</div>
        <section className={utilStyles.headingMd}>
        <p>
        I work in software design and development industry for last couple of decades.</p>
       
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}