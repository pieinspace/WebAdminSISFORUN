"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const runnerController_1 = require("../controllers/runnerController");
const router = (0, express_1.Router)();
router.get('/', runnerController_1.getRunners);
exports.default = router;
