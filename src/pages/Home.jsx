import React from "react";

function Home() {
  return (
    <section className="page home">
      <div className="container">
        <h2>Bem-vindo à LojaTop</h2>
        <p>
          A LojaTop oferece os melhores produtos de tecnologia, moda e casa com 
          preços incríveis e entrega rápida para todo o Brasil!
        </p>
        <a href="/produtos" className="btn">Ver produtos</a>
      </div>
    </section>
  );
}

export default Home;