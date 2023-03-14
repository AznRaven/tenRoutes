import React from 'react'

function Index() {
    // can't use hooks or state
    // can't use event listeners in the same way
    return (
        <>
      <div style={{display: "flex", justifyContent: 'space-between'}}>
        <a href="/">
          <h1>Home</h1>
        </a>
        <a href="/about">
          <h1>About</h1>
        </a>
        <a href="/blog">
          <h1>Blog</h1>
        </a>
        <a href="/cart">
          <h1>Cart</h1>
        </a>
        <a href="/contact">
          <h1>Contact</h1>
        </a>
        <a href="/products">
          <h1>Products</h1>
        </a>
        <a href="/projects">
          <h1>Projects</h1>
        </a>
        <a href="/sales">
          <h1>Sales</h1>
        </a>
        <a href="/shopping">
          <h1>Shopping</h1>
        </a>
        <a href="/vlog">
          <h1>Vlog</h1>
        </a>
      </div>
      <div>
        <h1>Shopping Page</h1>
      </div>
    </>
    )
}

export default Index