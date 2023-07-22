import { container } from "tsyringe";

import { AuthControllerImpl } from "@/modules/auth/auth/api/controllers/impl/AuthControllerImpl";
import { Crud1ControllerImpl } from "@/modules/cruds-example/crud-example1/api/controllers/impl/Crud1ControllerImpl";
import { Crud2ControllerImpl } from "@/modules/cruds-example/crud-example2/api/controllers/impl/Crud2ControllerImpl";

import { AuthServiceImpl } from "@/modules/auth/auth/business/services/impl/AuthServiceImpl";
import { UserServiceImpl } from "@/modules/auth/user/business/services/impl/UserServiceImpl";
import { Crud1ServiceImpl } from "@/modules/cruds-example/crud-example1/business/services/impl/Crud1ServiceImpl";
import { Crud2ServiceImpl } from "@/modules/cruds-example/crud-example2/business/services/impl/Crud2ServiceImpl";

import { UserRepositoryImpl } from "@/modules/auth/user/database/repositories/impl/typeorm/repositories/UserRepositoryImpl";
import { Crud1RepositoryImpl } from "@/modules/cruds-example/crud-example1/database/repositories/impl/typeorm/repositories/Crud1RepositoryImpl";
import { Crud2RepositoryImpl } from "@/modules/cruds-example/crud-example2/database/repositories/impl/typeorm/repositories/Crud2RepositoryImpl";

container.register("AuthController", {useClass: AuthControllerImpl});
container.register("Crud1Controller", {useClass: Crud1ControllerImpl});
container.register("Crud2Controller", {useClass: Crud2ControllerImpl});

container.register("AuthService", {useClass: AuthServiceImpl});
container.register("UserService", {useClass: UserServiceImpl});
container.register("Crud1Service", {useClass: Crud1ServiceImpl});
container.register("Crud2Service", {useClass: Crud2ServiceImpl});

container.register("UserRepository", {useClass: UserRepositoryImpl});
container.register("Crud1Repository", {useClass: Crud1RepositoryImpl});
container.register("Crud2Repository", {useClass: Crud2RepositoryImpl});
