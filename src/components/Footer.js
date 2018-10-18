import React from 'react'

function Footer() {
  return (
    <footer class="page-footer">
    <div class="dividing-line"></div>
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Rick Brown 2018</h5>
            <p class="grey-text text-lighten-4">This 'test' app was written using React.js, together with redux & redux thunk. It merely is for demontration purposes only. These are NOT real contact details.</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">GitHub</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="#!">Twitter</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">FreeCode Camp</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Email</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        © 2018 Rick Brown
        <a class="grey-text text-lighten-4 right" href="#!">GitHub Pages</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
