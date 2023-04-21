import autores from "../models/Autor.js"

class AutorControler {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }

    static listarAutoresPorId = (req, res) => {
        const id = req.params.id

        autores.findById(id, (err, autores) => {
            if (!err) {
                res.status(200).json(autores)
            } else {
                res.status(400).send({ message: `${err.message} - Id incorreto, inexistente no banco` })
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body)

        autor.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha! autor não cadastrado!` })
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id

        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send("autor atualizado com sucesso")
            } else {
                res.status(500).send({ message: `${err.message} - autor não atualizado` })
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id

        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send("autor deletado com sucesso")
            } else {
                res.status(500).send({ message: `${err.message} - autor não deletado, ID inexistente` })
            }
        })
    }
}

export default AutorControler;