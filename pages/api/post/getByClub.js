import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { getReceiptDownloadURL } from '../../../utils/firebase'

import { getDownloadURL } from 'firebase/storage'

export default async function handler(
	req,
	res
) {
	console.log("hello there ************************************************************")
	console.log(req.body)



	const name = req.query.clubId;



	const messages = await prisma.post.findMany({
		where: {
			clubId: name
		},
		orderBy: {
			createdAt: 'asc'
		}


	})



	res.status(200).json(messages)







}