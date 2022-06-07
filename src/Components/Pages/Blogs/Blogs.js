import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="pt-32">
        <div className="pt-3 m-3 shadow">
          <h1 className="text-center text-pink-600">Java Script VS NodeJs</h1>
          <div className="grid grid-cols-2 gap-3 p-3">
            <div name="JavaScript" className="p-3 border shadow">
              <h1 className="text-center text-pink-600">JavaScript</h1>
              <ul>
                <li>
                  1. JavaScript is a programming language. It is running in any
                  web browser with a proper browser engine.
                </li>
                <li>
                  2. Mainly using for any client-side activity for a web
                  application, like possible attribute validation or refreshing
                  the page in a specific interval or provide some dynamic
                  changes in web pages without refreshing the page.
                </li>
                <li>
                  3. JavaScript running any engine like Spider monkey (FireFox),
                  JavaScript Core (Safari), V8 (Google Chrome).
                </li>
              </ul>
            </div>
            <div>
              <div name="JavaScript" className="border shadow">
                <h1 className="pt-3 text-center text-pink-600 ">NodeJs</h1>
                <ul>
                  <li>
                    1. It is an interpreter and environment for JavaScript with
                    some specific useful libraries which JavaScript programming
                    can use separately.
                  </li>
                  <li>
                    2. It mainly used for accessing or performing any
                    non-blocking operation of any operating system, like
                    creating or executing a shell script or accessing any
                    hardware-specific information or running any backend job.
                  </li>
                  <li>
                    3. Node JS only run in a V8 engine which mainly used by
                    google chrome. And javascript program which will be written
                    under this Node JS will be always run in V8 Engine.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 shadow">
        <h1 className="pt-5 text-center text-pink-600">
          {" "}
          When should you use nodejs and when should you use mongodb
        </h1>
        <div className="pt-3 m-5 border shadow">
          <div>
            <h4 className="text-center text-pink-600">
              {" "}
              NodeJS and MongoDB are two different process.
            </h4>

            <div className="grid grid-cols-2 gap-3 p-3">
              <div name="JavaScript" className="p-3 border shadow">
                <h1 className="text-center text-pink-600">NodeJS</h1>
                <ul>
                  <li>
                    Shortly we can say, NodeJS is a JavaScript runtime
                    environment. It's actually helps JavaScript to run outside
                    of server. It's used in server side development.
                  </li>
                </ul>
              </div>
              <div>
                <div name="JavaScript" className="border shadow">
                  <h1 className="pt-3 pb-5 text-center text-pink-600">
                    MongoDB
                  </h1>
                  <ul>
                    <li>
                      But, MongoDB is NoSQL database which is document oriented.
                      It represents data as of JSON documents. It's used for
                      store data.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="w-1/3 p-2 mx-auto border shadow">
              {" "}
              MongoDB is a database where we can store data and NodeJS helps us
              to to connect our client site to database by it's server site.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-5 shadow">
        <div>
          <h1 className="text-center text-pink-600">
            Differences between SQL and No SQL databases.
          </h1>
          <h1 className="pt-5 text-center text-pink-600">SQL vs NoSQL</h1>
          <div className="grid grid-cols-2 gap-3 p-3">
            <div name="JavaScript" className="p-3 border shadow">
              <h1 className="text-center text-pink-600">SQL</h1>
              <ul>
                <li>1. SQL databases are relational.</li>
                <li>
                  2. SQL databases use structured query language and have a
                  predefined schema.
                </li>
                <li>3. SQL databases are vertically scalable</li>
                <li>4. SQL databases are table-based</li>
                <li>5. SQL databases are better for multi-row transactions</li>
              </ul>
            </div>
            <div>
              <div name="JavaScript" className="border shadow">
                <h1 className="pt-4 pb-5 text-center text-pink-600">No SQL</h1>
                <ul>
                  <li>1. NoSQL databases are non-relational.</li>
                  <li>
                    2. NoSQL databases have dynamic schemas for unstructured
                    data.
                  </li>
                  <li>3. NoSQL databases are horizontally scalable.</li>
                  <li>
                    4. NoSQL databases are document, key-value, graph, or
                    wide-column stores.
                  </li>
                  <li>
                    5. NoSQL is better for unstructured data like documents or
                    JSON.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
