import styles from "./page.module.css";
import 'blazing-layout'


export default function Home() {
  return (
    <div className="page-container">
      <h2>Brand Book</h2>
      <p>
        So God created man in his own image, in the image of God he created him; male and female he created them.
        And God said, Let there be light, and there was light. And God saw that the light was good.
        So God created man in his own image, in the image of God he created him; male and female he created them.
        And God said, Let there be light, and there was light. And God saw that the light was good.
        So God created man in his own image
      </p>
      <img src="/images/img01.jpg" alt="Heusen" width="100%" />
      <p className="vspace">
        So God created man in his own image, in the image of God he created him; male and female he created them.
        And God said, Let there be light, and there was light. And God saw that the light was good.</p>

      <div className="card">
        <div className="rbs">
          <img src="/images/img02.jpg" alt="Heusen" width="50%" />
          <div className="w100 padding2">

          <h3>VAN HEUSEN LOOK BOOK</h3>
          <p>With a strong foundation in men's fashion, Van Heusen has expanded into brands. in the U.S also after</p>
          </div>
        </div>
      </div>
    </div>
  );
}
