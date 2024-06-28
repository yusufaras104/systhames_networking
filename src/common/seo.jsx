import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {" "}
        {pageTitle && `${pageTitle} - SysThames Technology & IT Solutions`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="description"
        content="SysThames, established in 1997, produces a wide range of copper and fiber optic cables for communication. Our extensive global network of manufacturing facilities gives us significant scale and the flexibility to fulfill our customer requirements."
      />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;
