import express from express
import { protectRoute } from "../middleware/auth.middleware";
import {getMyFriends,getRecommendedUsers} from "../controllers/user.controller"
const router=express.Router();
router.use(protectRoute)
router.get("/",getRecommendedUsers);
router.get("/friends",getMyFriends);
router.post("/friend-request/:id",sendFriendRequest);
router.post("/friend-request/:id/accept",acceptFriendRequest);
// router.post("/friend-request/:id/reject",rejectFriendRequest);
router.get("/friend-requests",getMyFriendRequests); 
router.get("/outgoing-friend-requests",getOutgoingFriendReqs);
export default router;
