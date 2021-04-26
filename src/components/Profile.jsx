import React, { useState, useEffect } from 'react'
import DisplayTable from './DisplayTable'


const URL = 'https://api.github.com/users'
const Profile = () => {
   const [name, setName] = useState('')
   const [data, setData] = useState({})
   const [repos, setRepos] = useState([])

   const getUserInfo = async () => {
      try {
         const res = await fetch(`${URL}/${name}`)
         const data = await res.json()
         setData(data)
         if (data) {
            const repo = await fetch(data.repos_url)
            const repoList = await repo.json()
            setRepos(repoList)
         }
      } catch (error) {
         console.log(error)
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      getUserInfo()
      setName('')
   }
   const handleClear = () => {
      setData({})
      setRepos([])
   }

   useEffect(() => {

   }, [data, repos])



   return (
      <>
         <div className="row justify-content-center my-4">
            <div className="col-md-6">
               <div className="card p-2">
                  <div className="card-header text-center">
                     <h4>Search by GitHub<i className="fab fa-github"></i> username</h4>
                  </div>
                  <div className="card-body">
                     <p>Example: siddique000, lahin31, zonayedpca</p>
                     <form onSubmit={handleSubmit}>
                        <div className="form-group">
                           <label htmlFor="username"><b>Username</b></label>
                           <input
                              placeholder="Enter username"
                              id="username"
                              type="text"
                              className="form-control"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                           />
                        </div>
                        <div className="buttons">
                           <button type="submit" className="btn btn-info btn-sm mr-2"> <i className="fab fa-github"></i> Search</button>
                           <button className="btn btn-dark btn-sm" onClick={handleClear}>Clear </button>
                           <p className='d-inline ml-3 text-danger'>{data.message}</p>
                        </div>
                     </form>
                  </div>
               </div>
            </div >
         </div>
         { Object.keys(data).length !== 2 && Object.keys(data).length !== 0 && <DisplayTable userInfo={data} repos={repos} />}
      </>
   )
}

export default Profile
