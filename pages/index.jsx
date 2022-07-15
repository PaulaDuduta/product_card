import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Product Card</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="content-wrapper container">
        <div className="brand-image">
          {/* <picture>
            <source
              media="(min-width: 768px )"
              srcset="/images/image-product-desktop.jpg"
            />

            <img
              src="/images/image-product-mobile.jpg"
              alt="parfume bottle, green, leaves"
            />
          </picture> */}
        </div>

        <div className="product-card container">
          <header className="product-title">
            <h3>Perfume</h3>

            <h1>Gabrielle Essence Eau De Parfum</h1>
          </header>

          <section>
            <p className="product-infos">
              A floral, solar and voluptuous interpretation composed by Oliver
              Polge, Perfumer-Creator for the House of <span>Chanel</span>.
            </p>

            <div className="product-price">
              <span>$149.99</span>

              <span>$169.99</span>
            </div>
          </section>

          <footer className="cart-button">
            <button title="Add to cart">
              <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                  fill="#FFF"
                />
              </svg>
              Add to Cart
            </button>
          </footer>
        </div>
      </main>

      <div className="attribution text-center d-md-block d-none fw-bold">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Paula D</a>.
      </div>
    </div>
  );
}