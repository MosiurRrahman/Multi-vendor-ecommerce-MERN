const adminModel = require('../models/adminModel');
const sellerModel = require('../models/sellerModel');
const sellerCustomerModel = require('../models/chat/sellerCustomerModel');
const { responseReturn } = require("../utiles/response");
const { createToken } = require("../utiles/tokenCreate");
const  bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
class authControllers {
    admin_login = async (req, res) => {
        const { email, password } = req.body;

        try {
            const admin = await adminModel.findOne({ email }).select("+password")
            if (admin) {
                const match = await bcrypt.compare(password, admin.password)
                if (match) {
                    const token = await createToken({
                        id: admin.id,
                        role: admin.role
                    })
                    res.cookie("accessToken", token,{
                        expires: new Date(Date.now()+7*24*60*60*100)
                    })
                    responseReturn(res,200,{token,message:"login success"})
                } else {
                    responseReturn(res, 404, { error: "Password not Match" })
                }
            } else {
                responseReturn(res, 404, { error: "Email not Found" })
            }
        } catch (error) {
            responseReturn(res, 500, { error: error.message })
        }
    }
    seller_login = async (req, res) => {
        const { email, password } = req.body;

        try {
            const seller = await sellerModel.findOne({ email }).select("+password")
            if (seller) {
                const match = await bcrypt.compare(password, seller.password)
                if (match) {
                    const token = await createToken({
                        id: seller.id,
                        role: seller.role
                    })
                    res.cookie("accessToken", token,{
                        expires: new Date(Date.now()+7*24*60*60*100)
                    })
                    responseReturn(res,200,{token,message:"login success"})
                } else {
                    responseReturn(res, 404, { error: "Password not Match" })
                }
            } else {
                responseReturn(res, 404, { error: "Email not Found" })
            }
        } catch (error) {
            responseReturn(res, 500, { error: error.message })
        }
    }
    getUser = async(req , res)=>{
        const {id, role} = req
        try {
            if(role === "admin"){
                const user = await adminModel.findById(id)
                responseReturn(res,200, {useInfo:user})
            }else{
                console.log("seller info");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    seller_register = async (req, res) => {
        const { email, name, password } = req.body
        try {
            const getUser = await sellerModel.findOne({ email })
            console.log(getUser);
            if (getUser) {
                responseReturn(res, 404, { error: 'Email alrady exit' })
            } else {
                const seller = await sellerModel.create({
                    name,
                    email,
                    password: await bcrypt.hash(password, 10),
                    method: 'menualy',
                    shopInfo: {}
                })
                console.log(seller);
                await sellerCustomerModel.create({
                    myId: seller.id
                })
                const token = await createToken({ id: seller.id, role: seller.role })
                res.cookie('accessToken', token, {
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                })
                responseReturn(res, 201, { token, message: 'register success' })
            }
        } catch (error) {
            console.log(error);
            responseReturn(res, 500, { error: 'Internal server error' })
        }
    }
}

module.exports = new authControllers;