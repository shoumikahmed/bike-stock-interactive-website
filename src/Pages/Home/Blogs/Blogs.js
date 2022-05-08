import React from 'react';

const Blogs = () => {
    return (
        <section className='px-4 my-4 mx-auto'>
            <h1 className='mb-6 text-warning text-center'>
                Basic Questions
            </h1>
            <div className='grid grid-cols-1 gap-24 md:grid-cols-2'>
                <div className='mt-4 border p-4 rounded'>
                    <h4 className='mt-10 mb-3'>
                        Difference between sql and nosql databases?
                    </h4>
                    <h6 className='text-secondary'>
                        SQL
                    </h6>
                    <p className='m-0'>1. SQL databases have fixed or static or predefined schema.</p>
                    <p className='m-0'>2. SQL databases are vertically scalable.</p>
                    <p className='m-0'>3. SQL databases are best suited for complex queries.</p>
                    <br />
                    <h6 className='text-secondary'>
                        NOSQL
                    </h6>
                    <p className='m-0'>1. NoSQL databases have dynamic schema.</p>
                    <p className='m-0'>2. NoSQL databases are horizontally scalable.</p>
                    <p className='m-0'>3. Javascript is capable enough to add HTML and play with the DOM.</p>
                </div>
                <div className='mt-4 border p-4 rounded'>
                    <h4 className='mt-10 mb-3'>
                        When should you use nodejs and when should you use mongodb?
                    </h4>
                    <p>
                        <strong>Nodejs</strong>- Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language .So, if i want to write some kind of stand-alone program or server in Javascript, then i can use nodejs for it.
                        <br />
                        <strong>MongoDB</strong> - If my application needs the ability to persistently store data in a way that you can efficiently query or update it later, then i Use MongoDB or any Other Database If my application needs the ability to persistently store data in a way that you can efficiently query or update it later, then i Use MongoDB or any Other Database.
                    </p>

                </div>
                <div className='mt-4 border p-4 rounded'>
                    <h4 className='mt-10 mb-3'>
                        Difference between javascript and nodejs?
                    </h4>
                    <h6 className='text-secondary'>
                        JAVASCRIPT
                    </h6>
                    <p className='m-0'>1. It is basically used on the client-side.</p>
                    <p className='m-0'>2. Javascript is used in frontend development.</p>
                    <p className='m-0'>3. SQL databases are best suited for complex queries.</p>
                    <br />
                    <h6 className='text-secondary'>
                        NODEJS
                    </h6>
                    <p className='m-0'>1. It is mostly used on the server-side.</p>
                    <p className='m-0'>2. Nodejs is used in server-side development.</p>
                    <p className='m-0'>3. Nodejs does not have capability to add HTML tags.</p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;