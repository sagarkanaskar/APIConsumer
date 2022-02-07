import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

export default function Singleitem() {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [item, setitem] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getitem() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        const data = await response.json()
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newitem = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setitem(newitem)
        } else {
          setitem(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getitem()
  }, [id])
  if (loading) {
    return <Loading/>
  }
  if (!item) {
    return <h2 className='section-title'>no item to display</h2>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = item
    return (
      <section className='section item-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>Name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>Category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>Info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>Glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>Instructions :</span> {instructions}
            </p>
            <p>
              <span className='drink-data'>Ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p>
          </div>
        </div>
      </section>
    )
  }
}
