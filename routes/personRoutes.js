const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");

//POST method to add new person
router.post("/", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the data

    const newPerson = new Person(data);
    const savedPerson = await newPerson.save();
    res.status(200).json(savedPerson);
    console.log("Data saved : ", savedPerson._id);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error!" });
    console.log(err);
  }
});

//GET method to get all persons
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error!" });
    console.log(err);
  }
});

// GET method to get the person by their work type
router.get('/:workType',async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType=="Chef"||workType=="Manager"||workType=="Waiter"){
            const data =await Person.find({work:workType});
            res.status(200).json(data);
        }
        else{
            res.status(404).json({message:"Data Not Found"});
        }
    }catch(err){
        res.status(500).json({error:"Internal Server Error"});
        console.log(err);
    }
})

module.exports = router;
