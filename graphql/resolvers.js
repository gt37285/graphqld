const pool = require('../src/database')

/**consultas */

const resolver = {
    Query: {},
    Blog: {},
    Mutation: {}
}


/** rutas */

resolver.Query.blogs = async (root) => {

    const resp = await pool.query('select * from blog')
    return resp.rows
}

resolver.Blog.autor = async ({ autor }) => {

    console.log(autor);

    if (!autor) return

    const res = await pool.query(`select * from autor where id=$1 `,[autor])


    return res.rows;
}


resolver.Mutation.crearBlog = async (root, { blog }) => {

    if (!blog) return

    let resp = await (await pool.query(`insert into blog (descripcion, autor) values ($1,$2) returning *`, [blog.descripcion, blog.autor])).rows[0]


    return resp
}

resolver.Mutation.actualizarBlog = async (root, { blog }) => {

    if (!blog) return

    let resp = await (await pool.query(`update blog set descripcion=$2, autor=$3 where id=$1 returning * `, [blog.id,blog.descripcion, blog.autor])).rows[0]


    return resp
}


resolver.Mutation.eliminarBlog = async (root, { blog }) => {

    if (!blog) return

    const resp = await (await (pool.query('delete from blog where id=$1 returning *', [blog.id]))).rows[0]

    return resp
}

module.exports = resolver 