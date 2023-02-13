// import React from 'react'
// const ContactForm = () => {
//   const [formStatus, setFormStatus] = React.useState('Send')
//   const onSubmit = (e) => {
//     e.preventDefault()
//     setFormStatus('Submitting...')
//     const { name, email, message } = e.target.elements
//     let conFom = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     }
//     console.log(conFom)
//   }

//   return (
//     <div className="container">
//       <h2 className="text">contact us for more information</h2>
//       <form onSubmit={onSubmit}>
//         <div >
//           <label  htmlFor="name">
//             Name
//           </label>
//           <input  type="text"  placeholder= "your name please "id="name" required />
//         </div>
//         <div className="mb-3">
//           <label  htmlFor="email">
//             Email
//           </label>
//           <input  type="email" placeholder="your email please" id="email" required />
//         </div>
//         <div>
//           <label htmlFor="message">
//             Message
//           </label>
//           <textarea   placeholder= "tell us "id="message" required />
//         </div>
//         <button  type="submit">
//           {formStatus}
//         </button>
//       </form>
//     </div>
//   )
// }
// export default ContactForm
//not finish yet, nothing in the database