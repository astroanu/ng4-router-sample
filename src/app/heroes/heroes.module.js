"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var hero_list_component_1 = require("./hero-list.component");
var hero_detail_component_1 = require("./hero-detail.component");
var hero_service_1 = require("./hero.service");
var heroes_routing_module_1 = require("./heroes-routing.module");
var HeroesModule = (function () {
    function HeroesModule() {
    }
    return HeroesModule;
}());
HeroesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            heroes_routing_module_1.HeroRoutingModule
        ],
        declarations: [
            hero_list_component_1.HeroListComponent,
            hero_detail_component_1.HeroDetailComponent
        ],
        providers: [hero_service_1.HeroService]
    })
], HeroesModule);
exports.HeroesModule = HeroesModule;
//# sourceMappingURL=heroes.module.js.map