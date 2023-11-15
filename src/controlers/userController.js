const {User: userModel} = require("../models/users");

const userControler = {

    create: async(req,res) => {
        try{
            const user ={
                id: req.body.id,
                nome: req.body.nome,
                CPF: req.body.CPF,
                dataNasc: req.body.dataNasc,
                comida: req.body.comida
            };
            console.log(user)
            const response = await userModel.create(user);

            res.status(201).json({response, msg: "Serviço criado com sucesso!"})

        } catch (error){
            console.log(error);
        }
    },
    getAll: async (req, res) =>{
        try{
            const user = await userModel.find()

            res.json(user);
        } catch(error){
            console.log(error);
        }
    },
    get: async (req, res) =>{
        try {
            const id = req.params.id;
            const user = await userModel.findById(id);

            if (!user) {
                res.status(404).json({msg: "Serviço não encontrado."});
                return;
            }

            res.json(user);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async(req, res) =>{
        try {
            
            const id= req.params.id;

            const user= await userModel.findById(id);

            if (!user) {
                res.status(404).json({msg: "Serviço não encontrado."});
                return;
            }

            const deletedUser = await userModel.findByIdAndDelete(id);

            res.status(200).json({deletedUser, msg: "Serviço excluido com sucesso!"});

        } catch (error) {
            console.log(error);
        }
    },
    update: async(req, res) =>{

        const id = req.params.id

        const user ={
            id: req.body.id,
            nome: req.body.nome,
            CPF: req.body.CPF,
            aniversario: req.body.aniversario,
            comidaFavorita: req.body.comidaFavorita
        };

        const updatedUser = await userModel.findByIdAndUpdate(id, user)

        if (!updatedUser) {
            res.status(404).json({msg: "Serviço não encontrado."});
            return;
        }

        res.status(200).json({user, msg: "Serviço atualizado com sucesso!"})
    }
};

module.exports = userControler;