"use strict";
const router_1 = require("@angular/router");
const main_component_1 = require('./components/main.component');
const gridPanel_component_1 = require("./components/gridPanel.component");
const menu_component_1 = require("./menu/menu.component");
const gridDetails_component_1 = require("./components/gridDetails.component");
const signup_component_1 = require("./auth/signup.component");
const APP_ROUTES = [
    { path: '', component: menu_component_1.MenuComponent },
    { path: 'step/:id', component: main_component_1.MainComponent },
    { path: 'step', component: main_component_1.MainComponent },
    { path: 'grid', component: gridPanel_component_1.GridPanelComponent },
    { path: 'grid/:grid_name', component: gridPanel_component_1.GridPanelComponent },
    { path: 'details/:record', component: gridDetails_component_1.GridDetailsComponent },
    { path: 'auth/signup', component: signup_component_1.SignupComponent },
    { path: 'menu', component: menu_component_1.MenuComponent }
];
exports.ROUTING = router_1.RouterModule.forRoot(APP_ROUTES);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5QkFBbUMsaUJBQWlCLENBQUMsQ0FBQTtBQUVyRCxpQ0FBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUkxRCxzQ0FBaUMsa0NBQWtDLENBQUMsQ0FBQTtBQUNwRSxpQ0FBNEIsdUJBQXVCLENBQUMsQ0FBQTtBQUNwRCx3Q0FBbUMsb0NBQW9DLENBQUMsQ0FBQTtBQUN4RSxtQ0FBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUd4RCxNQUFNLFVBQVUsR0FBVztJQUN2QixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFDLDhCQUFhLEVBQUc7SUFDckMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFDO0lBQzVDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQztJQUN4QyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFDO0lBQzdDLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBQztJQUN4RCxFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsNENBQW9CLEVBQUM7SUFDMUQsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO0lBQ2pELEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsOEJBQWEsRUFBQztDQUMxQyxDQUFDO0FBRVcsZUFBTyxHQUFHLHFCQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXMsIFJvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHtNYWluQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbWFpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge1N0YXRlQ29tcG9uZW50fSBmcm9tICcuL3N0YXRlL3N0YXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UHJvZmlsZUNvbXBvbmVudH0gZnJvbSBcIi4vcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1Bob3Rvc0NvbXBvbmVudH0gZnJvbSBcIi4vcGhvdG9zL3Bob3Rvcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtHcmlkUGFuZWxDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JpZFBhbmVsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gXCIuL21lbnUvbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtHcmlkRGV0YWlsc0NvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkRGV0YWlscy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuL2F1dGgvc2lnbnVwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3QgQVBQX1JPVVRFUzogUm91dGVzID0gW1xyXG4gICAge3BhdGg6ICcnLCBjb21wb25lbnQ6TWVudUNvbXBvbmVudCAgfSwgICAgLy9cclxuICAgIHtwYXRoOiAnc3RlcC86aWQnLCBjb21wb25lbnQ6IE1haW5Db21wb25lbnR9LFxyXG4gICAge3BhdGg6ICdzdGVwJywgY29tcG9uZW50OiBNYWluQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnZ3JpZCcsIGNvbXBvbmVudDogR3JpZFBhbmVsQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnZ3JpZC86Z3JpZF9uYW1lJywgY29tcG9uZW50OiBHcmlkUGFuZWxDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICdkZXRhaWxzLzpyZWNvcmQnLCBjb21wb25lbnQ6IEdyaWREZXRhaWxzQ29tcG9uZW50fSxcclxuICAgIHtwYXRoOiAnYXV0aC9zaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJ21lbnUnLCBjb21wb25lbnQ6TWVudUNvbXBvbmVudH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBST1VUSU5HID0gUm91dGVyTW9kdWxlLmZvclJvb3QoQVBQX1JPVVRFUyk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
