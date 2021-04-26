import React from 'react'

const DetailsTable = ({ userInfo, repos }) => {
   return (
      <>
         <div className='profile_area'>
            <img src={userInfo.avatar_url} alt={userInfo.name} height="180" width="180" />
            <p>{userInfo.name}</p>
            <div style={{ fontSize: "25px" }}>
               <a href={userInfo.html_url} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" title={userInfo.login} style={{ color: "#333" }}></i>
               </a>
               {userInfo.twitter_username && <a href={userInfo.html_url} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter" style={{ color: "#00acee", marginLeft: '15px' }} title={userInfo.twitter_username}
                  ></i>
               </a>}
            </div>
         </div>
         <div className='table-area'>
            <table className="table table-bordered mt-2">
               <thead>
                 
               </thead>
               <tbody>
                  <tr>
                     <th>Username</th>
                     <td>{userInfo.login}</td>
                  </tr>
                  <tr>
                     <th>Id</th>
                     <td>{userInfo.id}</td>
                  </tr>
                  <tr>
                     <th>Bio</th>
                     <td>{userInfo.bio}</td>
                  </tr>
                  <tr>
                     <th>Blog</th>
                     <td>
                        <a href={userInfo.blog} target="_blank" rel="noopener noreferrer">{userInfo.blog}</a>
                     </td>
                  </tr>
                  {userInfo.email && (
                     <tr>
                        <th>Email</th>
                        <td>{userInfo.email}</td>
                     </tr>
                  )}
                  {userInfo.company && (
                     <tr>
                        <th>Organization</th>
                        <td>{userInfo.company}</td>
                     </tr>
                  )}
                  <tr>
                     <th>Location</th>
                     <td>{userInfo.location}</td>
                  </tr>
                  <tr>
                     <th>Followers</th>
                     <td>{userInfo.followers}</td>
                  </tr>
                  <tr>
                     <th>Following</th>
                     <td>{userInfo.following}</td>
                  </tr>
                  {userInfo.created_at &&
                     <tr>
                        <th>Account Created</th>
                        <td>{userInfo.created_at.substring(0, 10)}</td>
                     </tr>
                  }

                  <tr>
                     <th>Repository</th>
                     <td>{userInfo.public_repos}</td>
                  </tr>
                  <tr>
                     <th>Repository List</th>
                     <td>
                        {repos.map(repo => (
                           <div key={repo.id} style={{ marginBottom: '5px' }} >
                              <i className="fab fa-github d-inline" ></i>
                              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                 <p className='d-inline' style={{ marginLeft: '5px' }}>{repo.name}</p>
                              </a>
                           </div>
                        ))}
                     </td>
                  </tr>
               </tbody>

            </table>
         </div>
      </>
   )
}

export default DetailsTable
