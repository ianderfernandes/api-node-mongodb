import livros from "../models/Livro.js"

class LivroControler {

    static listarLivros = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
                res.status(200).json(livros)
            })
    }

    static listarLivrosPorId = (req, res) => {
        const id = req.params.id

        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livros) => {
                if (!err) {
                    res.status(200).json(livros)
                } else {
                    res.status(400).send({ message: `${err.message} - Id incorreto, inexistente no banco` })
                }
            })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body)

        livro.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha! Livro não cadastrado!` })
            } else {
                res.status(201).send(livro.toJSON(),
                    "Livro cadastrado com sucesso")
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id

        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send("Livro atualizado com sucesso")
            } else {
                res.status(500).send({ message: `${err.message} - Livro não atualizado` })
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id

        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send("Livro deletado com sucesso")
            } else {
                res.status(500).send({ message: `${err.message} - Livro não deletado, ID inexistente` })
            }
        })
    }

    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora

        livros.find({'editora': editora}, {}, (err, livros) => {
            if (!err){
                res.status(200).send(livros)
            } else {
                res.status(400).send({message: `${err.message} - Id incorreto`})
            }
        })
    }
}

export default LivroControler;