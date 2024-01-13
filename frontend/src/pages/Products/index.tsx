import ProductList from '../../components/ProductList'

const Products = () => {
  return (
    <>
      <ProductList title="Produtos" />
      <div className="container">
        <hr />
      </div>
      <ProductList title="Categorias" />
    </>
  )
}

export default Products
