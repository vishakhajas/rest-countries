import React, { useEffect,useContext } from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSingleCountry} from '../../slices/singleCountrySlice'
import { myContext } from "../../App";
import "./SingleCountry.css";
import { BorderCountry } from './BorderCountry';



const SingleCountry = () => {
  const { dark } = useContext(myContext);
  const dispatch = useDispatch();
  const {country} = useSelector((state) => state.singleCountry)
  const {name} = useParams();
  console.log(country)
  useEffect(()=> {
    dispatch(fetchSingleCountry(name))
  }, [])
  return (
  <>
    <div  className={`${dark ? "dark" : ""} singleCountry-container`} style={{display:"grid",gridTemplateColumns :"auto auto",gap:"20px",justifyContent:"center",margin:"100px auto",height:"100vh"}}>
          <div >
            <img
            style={{width:"400px"}}
            src={country && country.length && country[0]?.flag} />
          </div>
         <div>
         <h1>{country && country.length && country[0]?.name}</h1>
         <div style={{display:"flex",gap:"20px",justifyContent:"center",marginTop:"30px"}}>
          <div>
          <div><b>Native Name:</b>{country && country.length && country[0]?.nativeName}</div>
          <div><b>Population:</b>{country && country.length && country[0]?.population}</div>
          <div><b>Region:</b>{country && country.length && country[0]?.region}</div>
          <div><b>Sub Region:</b>{country && country.length && country[0]?.subregion}</div>
          <div><b>Capital:</b>{country && country.length && country[0]?.capital}</div>
          </div>
          <div >
          <div><b>Top Level:</b>{country && country.length && country[0]?.topLevelDomain}</div>
          <div><b>Currencies:</b>{country && country.length && country[0]?.currencies[0].name}</div>
          <div><b>Languages:</b>{country && country.length && country[0]?.languages.map((lan, index) => {
            return <span>
              {lan.name}{index === country[0]?.languages.length-1 ? "" : ","}
            </span>
          })}</div>

          </div>
          </div>
         <div className='scountry' style={{display:"flex",marginTop:"20px"}}>
          <h6 style={{fontSize:'16px'}}>Border Countries:</h6>
          <div className='borders'>
              {country && country.length && country[0]?.borders.map((border, index) => {
                return <div>
                <BorderCountry border={border}/>
                </div>
              })}
            </div>

         </div>
         </div>
    </div>
  </>
  )
}

export default SingleCountry