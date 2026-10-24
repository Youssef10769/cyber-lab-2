const checkBudget= (req,res)=>{
    const {budget}= req.body;

    if(typeof budget !== "number" || budget<=0 || !Number.isFinite(budget))
    {
return res.status(400).json({message:"provide a numeric budget"})
    }
    const affordableTrips
    for(let i=0;i<affordableTrips.lengh;i++)
    {
if(trips{i}.cost<=budget)
{
    affordableTrips.push(trips)
}
    }
res.send =(affordableTrips);1234789-=123
}