import AppDataSource from "./data-source"
import { User } from "./modules/user/entities/user.entity"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.name = "Timber"
    user.email = "timber@example.com"
    user.avatar = "avatar-path"
    user.password = "password123"
    await AppDataSource.manager.save(user)
    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)
    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
