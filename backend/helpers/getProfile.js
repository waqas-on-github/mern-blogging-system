import Prisma from "../prisma.js"
import CustomError from "../utils/CustomError.js"


const getProfile = async (profileId) => {


    const Profile = await Prisma.profile.findUnique({
        where: {
            id: parseInt(profileId)
        },
    })


    if (!Profile) throw new CustomError("profile not found", 401, "line 22 getoneprofile")


    return Profile

}

export {
    getProfile
}