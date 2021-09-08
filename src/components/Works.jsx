import React from 'react';
import { Spring, animated } from 'react-spring';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Works({ close }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    centerMode: true,
    variableHeight: true,
  };

  return (
    <Spring
      from={{ opacity: 0, transform: 'translateY(4rem)' }}
      to={{ opacity: 1, transform: 'translateY(0)' }}
      config={{ duration: 1500 }}>
      {(props) => (
        <animated.div style={props} className="content__item-works">
          <svg
            onClick={close}
            width="30"
            height="30"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.63 10.315C20.63 10.2335 20.6291 10.1523 20.6272 10.0712C20.4972 4.49574 15.9212 0 10.315 0C4.62737 0 0 4.62737 0 10.315C0 15.9721 4.57776 20.5802 10.2234 20.6296C10.2539 20.6299 10.2844 20.63 10.315 20.63C10.3456 20.63 10.3761 20.6299 10.4066 20.6296C16.0522 20.5802 20.63 15.9721 20.63 10.315ZM14.2303 13.1855C14.1879 13.0885 14.1265 13.0009 14.0497 12.928L11.4373 10.315L14.0497 7.70203C14.1922 7.55202 14.2705 7.35226 14.2679 7.14536C14.2652 6.93846 14.1819 6.74077 14.0355 6.59446C13.8892 6.44814 13.6915 6.36477 13.4846 6.36212C13.2777 6.35947 13.078 6.43775 12.928 6.58028L10.315 9.19275L7.70203 6.58028C7.55202 6.43775 7.35226 6.35947 7.14536 6.36212C6.93846 6.36477 6.74077 6.44814 6.59446 6.59446C6.44814 6.74077 6.36477 6.93846 6.36212 7.14536C6.35947 7.35226 6.43775 7.55202 6.58028 7.70203L9.19275 10.315L6.58028 12.928C6.43775 13.078 6.35947 13.2777 6.36212 13.4846C6.36477 13.6915 6.44814 13.8892 6.59446 14.0355C6.74077 14.1819 6.93846 14.2652 7.14536 14.2679C7.35226 14.2705 7.55202 14.1922 7.70203 14.0497L10.315 11.4373L12.928 14.0497C13.0009 14.1265 13.0885 14.1879 13.1855 14.2303C13.2826 14.2727 13.3872 14.2952 13.4931 14.2966C13.599 14.298 13.7041 14.2781 13.8022 14.2382C13.9003 14.1983 13.9894 14.1392 14.0643 14.0643C14.1392 13.9894 14.1983 13.9003 14.2382 13.8022C14.2781 13.7041 14.298 13.599 14.2966 13.4931C14.2953 13.3872 14.2727 13.2826 14.2303 13.1855Z"
              fill="#5E5E5E"
            />
          </svg>
          <h2>My works</h2>
          <div className="works-block">
            <h3>1. Sneakers-shop</h3>
            <div className="slider-wrapper">
              <div className="slider">
                <Slider {...settings}>
                  <div>
                    <img width={520} height={450} src="/img/sneakers/1.png" alt="sneaker1" />
                  </div>
                  <div>
                    <img width={520} height={450} src="/img/sneakers/2.png" alt="sneaker2" />
                  </div>
                  <div>
                    <img width={520} height={450} src="/img/sneakers/3.png" alt="sneaker3" />
                  </div>
                  <div>
                    <img width={520} height={450} src="/img/sneakers/4.png" alt="sneaker4" />
                  </div>
                  <div>
                    <img width={520} height={450} src="/img/sneakers/5.png" alt="sneaker5" />
                  </div>
                  <div>
                    <img width={520} height={450} src="/img/sneakers/6.png" alt="sneaker6" />
                  </div>
                </Slider>
              </div>
              <div className="text">
                <p>
                  A simple online sneaker store based on React.JS. Product output to the site
                  section from a json file. All data on operations is saved to the stack and MocAPI.
                  Slider-carousel for advertising is connected.
                  <br />
                  Available functions:
                  <ul>
                    <li>
                      - adding and deleting an item to the cart, calculating the total amount;
                    </li>
                    <li>- adding and deleting the product you like to bookmarks;</li>
                    <li>- placing an order from the basket.</li>
                  </ul>
                </p>
                <b>
                  STACK:
                  <ul>
                    <li>React.js + hooks(useState, useEffect, useContext)</li>
                    <li>React-content-loader</li>
                    <li>Axios</li>
                    <li>React-Router</li>
                  </ul>
                </b>
                <p>
                  Links to work:
                  <a href="https://sneakers-shop-app.herokuapp.com/">
                    https://sneakers-shop-app.com
                  </a>
                </p>
                <p>
                  GitHub:
                  <a href="https://github.com/CheersM/sneakers-shop-app">
                    github.com/CheersM/sneakers-shop-app
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="works-block">
            <h3>2. Pizza-shop</h3>
            <div className="slider-wrapper">
              <div className="slider">
                <Slider {...settings}>
                  <div>
                    <img width={520} height={400} src="/img/pizza/1.png" alt="pizza1" />
                  </div>
                  <div>
                    <img width={520} height={400} src="/img/pizza/2.png" alt="pizza2" />
                  </div>
                  <div>
                    <img width={520} height={400} src="/img/pizza/3.png" alt="pizza3" />
                  </div>
                  <div>
                    <img width={520} height={400} src="/img/pizza/4.png" alt="pizza4" />
                  </div>
                </Slider>
              </div>
              <div className="text">
                <p>
                  A simple online pizzas store based on React.JS. Product data is stored on a fake
                  server. State manager Redux is connected.
                  <br />
                  Available functions:
                  <ul>
                    <li>
                      - adding and deleting an item to the cart, calculating the total amount;
                    </li>
                    <li>- placing an order from the basket;</li>
                    <li>- the ability to empty the basket;</li>
                    <li>- the ability to select a product by category;</li>
                    <li>-the ability to sort the product according to the selected options;</li>
                    <li>-the ability to select the type of product.</li>
                  </ul>
                </p>
                <b>
                  STACK:
                  <ul>
                    <li>ReactJS + hooks(useState, useEffect, useCallback, useMemo)</li>
                    <li>React-content-loader</li>
                    <li>Axios</li>
                    <li>React-Router</li>
                    <li>Redux/Redux thunk</li>
                    <li>json-server</li>
                    <li>classnames</li>
                  </ul>
                </b>
                <p>
                  GitHub:
                  <a href="https://github.com/CheersM/react-test-app">
                    github.com/CheersM/react-test-app
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="works-block">
            <h3>3. ToDo list</h3>
            <div className="slider-wrapper">
              <div className="slider">
                <Slider {...settings}>
                  <div>
                    <img width={520} height={350} src="/img/todo/1.png" alt="todo1" />
                  </div>
                  <div>
                    <img width={520} height={350} src="/img/todo/2.png" alt="todo2" />
                  </div>
                  <div>
                    <img width={520} height={350} src="/img/todo/3.png" alt="todo3" />
                  </div>
                  <div>
                    <img width={520} height={350} src="/img/todo/4.png" alt="todo4" />
                  </div>
                  <div>
                    <img width={520} height={350} src="/img/todo/4.png" alt="todo4" />
                  </div>
                </Slider>
              </div>
              <div className="text">
                <p>
                  A ready-to-use React.JS to-do list app. The data is stored on a fake json server.
                  Receiving and sending requests using the axios library.
                  <br />
                  Available functions:
                  <ul>
                    <li>- adding and deleting a list;</li>
                    <li>- adding color marking of lists;</li>
                    <li>- adding, deleting and editing tasks in the list;</li>
                    <li>- display of completed tasks;</li>
                    <li>
                      - output of all tasks of all lists or output of tasks for a specific list;
                    </li>
                    <li>displaying a message about no tasks.</li>
                  </ul>
                </p>
                <b>
                  STACK:
                  <ul>
                    <li>ReactJS + hooks(useState, useEffect)</li>
                    <li>Axios</li>
                    <li>React-Router</li>
                    <li>json-server</li>
                    <li>classnames</li>
                  </ul>
                </b>
                <p>
                  GitHub:
                  <a href="https://github.com/CheersM/todo-app">github.com/CheersM/todo-app</a>
                </p>
              </div>
            </div>
          </div>

          <div className="works-block">
            <h3>4. Invoices list</h3>
            <div className="slider-wrapper">
              <div className="slider">
                <Slider {...settings}>
                  <div>
                    <img width={520} height={350} src="/img/inv/1.png" alt="inv1" />
                  </div>
                  <div>
                    <img width={520} height={350} src="/img/inv/2.png" alt="inv2" />
                  </div>
                </Slider>
              </div>
              <div className="text">
                <p>
                  A simple invoice list application made in React.JS. Getting a list from a fake
                  json server using the axios library.
                  <br />
                  Available functions:
                  <ul>
                    <li>- adding, deleting and editing an invoice;</li>
                    <li>- validation of filling out the invoice form.</li>
                  </ul>
                </p>
                <b>
                  STACK:
                  <ul>
                    <li>ReactJS + hooks(useState, useEffect)</li>
                    <li>Axios</li>
                    <li>json-server</li>
                  </ul>
                </b>
                <p>
                  GitHub:
                  <a href="https://github.com/CheersM/invoices-app">
                    github.com/CheersM/invoices-app
                  </a>
                </p>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Spring>
  );
}

export default Works;
