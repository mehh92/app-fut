"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const joueurRoutes_1 = __importDefault(require("./routes/joueurRoutes"));
const utilisateurRoutes_1 = __importDefault(require("./routes/utilisateurRoutes"));
const cors = require('cors');
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = 3001;
app.use(cors());
app.use(express_1.default.json());
app.use('/api/joueurs', joueurRoutes_1.default);
app.use('/api/utilisateurs', utilisateurRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const uri = "mongodb+srv://root:root@cluster0.yk5pevi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(uri);
            yield mongoose_1.default.connection.db.admin().command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
        }
        catch (error) {
            console.log(error);
        }
    });
}
run().catch(console.dir);
