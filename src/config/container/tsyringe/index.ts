import { container } from "tsyringe";

import { Crud1ControllerImpl } from "@/modules/cruds-example/crud-example1/api/controllers/impl/Crud1ControllerImpl";
import { Crud2ControllerImpl } from "@/modules/cruds-example/crud-example2/api/controllers/impl/Crud2ControllerImpl";

import { Crud1ServiceImpl } from "@/modules/cruds-example/crud-example1/business/services/impl/Crud1ServiceImpl";
import { Crud2ServiceImpl } from "@/modules/cruds-example/crud-example2/business/services/impl/Crud2ServiceImpl";

import { Crud1RepositoryImpl } from "@/modules/cruds-example/crud-example1/database/repositories/impl/typeorm/repositories/Crud1RepositoryImpl";
import { Crud2RepositoryImpl } from "@/modules/cruds-example/crud-example2/database/repositories/impl/typeorm/repositories/Crud2RepositoryImpl";

container.register("Crud1Controller", {useClass: Crud1ControllerImpl});
container.register("Crud2Controller", {useClass: Crud2ControllerImpl});

container.register("Crud1Service", {useClass: Crud1ServiceImpl});
container.register("Crud2Service", {useClass: Crud2ServiceImpl});

container.register("Crud1Repository", {useClass: Crud1RepositoryImpl});
container.register("Crud2Repository", {useClass: Crud2RepositoryImpl});
