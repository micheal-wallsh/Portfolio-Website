import example1 from './Pics/example1.png'
import trees from './Pics/trees.jpg'
import laptop from './Pics/computer.jpg'
import github from './Pics/github.png'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {

  return (
    <div>
      <Parallax pages={2.3}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${trees})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={1}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${laptop})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.8}
        >
          <header>
          <h2>Welcome to my portfolio.</h2>
          <p>Hi. Im Micheal Walsh.</p>
          <p>I am a college student doing Software Development. I have a passion for creating sleek beautiful modern websites.</p>
          <p>You can see my work and contacts below.</p>
          </header>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={0.8}
        >
          <footer>
          <div class="portfolioItem">
          <img src={example1}></img>
          <p>A game store site made for a school project.</p>
          </div>
          <div class="portfolioItem">
          <p>TBD</p> 
          </div>
          <div class="portfolioItem">
          <p>TBD</p>
          </div>
          <div class="portfolioItem">
           <p>TBD</p>
          </div>
          </footer>

          <div class="contactLinks">
            <a href="https://github.com/micheal-wallsh" target="_blank"><img src={github}></img></a>
          </div>          
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;