"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require("@angular/http");
var group_service_1 = require("./group.service");
var gridPanel_service_1 = require("../gridPanel.service");
var balletDetails_service_1 = require("./balletDetails.service");
var student_1 = require("./student");
var EditStudentComponent = (function () {
    function EditStudentComponent(router, _gridService, _groupService, _balletDetailsService, route, _http) {
        this.router = router;
        this._gridService = _gridService;
        this._groupService = _groupService;
        this._balletDetailsService = _balletDetailsService;
        this.route = route;
        this._http = _http;
        this.display_edit = false;
        this.groups = [];
        this.student = {};
        this.currentGroup = '';
        this.submitted = false;
    }
    EditStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.obj_id = params['record'];
        });
        console.log(this.obj_id);
        console.log(this._gridService.dataGrid);
        this._balletDetailsService.getDatas(this.obj_id)
            .subscribe(function (data) {
            console.log(data);
            _this.student_info = data;
            _this.model = new student_1.Student(data.DNI, data.father);
            _this.display_edit = true;
        }, function (error) { return console.log(error); });
    };
    EditStudentComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log(this.model);
    };
    EditStudentComponent = __decorate([
        core_1.Component({
            selector: 'group',
            template: "\n    \n\n       <nav class=\"form-navArrow\" *ngIf=\"display_edit\">\n            <a [routerLink]=\"['/grid']\" [queryParams]=\"{'grid_name': student_info.course_type, 'master_val': student_info.stage}\">\n            <button><i class=\"glyphicon glyphicon-triangle-left\" ></i>BACK</button></a>\n       </nav>\n    \n    <div  *ngIf=\"display_edit\"> \n          \n          <div class=\"panel-heading panel-heading-custom\">\n                <h1>{{student_info.profile[1].firstname}}  {{student_info.profile[0].nom}}</h1>\n           </div>\n          <!--<h2>{{student_info.age}} years old</h2>-->\n    \n        <div class=\"panel-body\">\n            <form #studentForm=\"ngForm\" (ngSubmit)=\"onSubmit()\"  >\n                <!--<div [formGroup]=\"studentGroup\">   -->\n                    <!--<div class=\"form-group\">-->\n                        <label for=\"DNI\" >DNI</label>\n                         <input \n                            myAutofocus\n                            class=\"form-control\"\n                            type=\"text\"\n                            id=\"DNI\"\n                            name=\"DNI\"\n                            value=\"{{student_info.DNI}}\"\n                              [(ngModel)]=\"model.DNI\" name=\"DNI\"\n                                #DNI=\"ngModel\">\n                         >\n                         <label for=\"Father\" >Father</label>\n                         <input \n                            myAutofocus\n                            class=\"form-control\"\n                            type=\"text\"\n                            id=\"father\"\n                            name=\"father\"\n                            value=\"{{student_info.father}}\"\n                              [(ngModel)]=\"model.father\" name=\"father\"\n                #father=\"ngModel\">\n                         >\n                         <!--formControlName=\"DNI\"-->\n                            <!--[formControl]=\"studentGroup.controls['DNI']\"-->\n                    <!--</div>-->\n                        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!studentForm.form.valid\">Submit</button>\n                        <!--<button type=\"button\" (click)=\"onClick()\" class=\"btn btn-primary\">Valider</button>-->\n                <!--</div>-->\n                \n                \n                \n            \n         </form>    \n                </div>    \n             \n                \n                    <!---->\n                    <!--<div>-->\n                        <!--<label>BECA</label>-->\n                         <!--<input -->\n                            <!--class=\"form-control\"-->\n                            <!--type=\"text\"-->\n                            <!--id=\"BECA\"-->\n                            <!--name=\"BECA\"-->\n                            <!--formControlName=\"BECA\"-->\n                            <!--value=\"{{student_info.BECA}}\"-->\n                            <!--[formControl]=\"studentGroup.controls['BECA']\"-->\n                            <!---->\n                         <!--&gt;-->\n                    <!--</div>-->\n                    <!--<div>-->\n                        <!--<label >Father</label>-->\n                         <!--<input -->\n                            <!--class=\"form-control\"-->\n                            <!--type=\"text\"-->\n                            <!--id=\"father\"-->\n                            <!--name=\"father\"-->\n                            <!--formControlName=\"father\"-->\n                            <!--value=\"{{student_info.father}}\"-->\n                            <!--[formControl]=\"studentGroup.controls['father']\"-->\n                         <!--&gt;-->\n                    <!--</div>-->\n                    <!--<div>-->\n                        <!--<label>Intolerence</label>-->\n                         <!--<input -->\n                            <!--class=\"form-control\"-->\n                            <!--type=\"text\"-->\n                            <!--id=\"intolerencia\"-->\n                            <!--name=\"intolerencia\"-->\n                            <!--formControlName=\"intolerencia\"-->\n                            <!--value=\"{{student_info.intolerencia}}\"-->\n                            <!--[formControl]=\"studentGroup.controls['intolerencia']\"-->\n                         <!--&gt;-->\n                    <!--</div>-->\n                                        <!---->\n        \n      </div>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, gridPanel_service_1.GridPanelService, group_service_1.GroupService, balletDetails_service_1.BalletDetailsService, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _c) || Object])
    ], EditStudentComponent);
    return EditStudentComponent;
    var _a, _b, _c;
}());
exports.EditStudentComponent = EditStudentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFsbGV0L2VkaXRTdHVkZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFDcEUsdUJBQXVELGlCQUFpQixDQUFDLENBQUE7QUFFekUscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBQ25DLDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLGtDQUErQixzQkFBc0IsQ0FBQyxDQUFBO0FBQ3RELHNDQUFtQyx5QkFBeUIsQ0FBQyxDQUFBO0FBRzdELHdCQUFzQixXQUFXLENBQUMsQ0FBQTtBQXFHbEM7SUFFSSw4QkFDb0IsTUFBYyxFQUFVLFlBQStCLEVBQ3RELGFBQTJCLEVBQVcscUJBQTJDLEVBQ2xGLEtBQXFCLEVBQVUsS0FBVztRQUYxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQW1CO1FBQ3RELGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQVcsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFzQjtRQUNsRixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU07UUFNOUQsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFYixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQW1DbEIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQTdDOEMsQ0FBQztJQWFqRSx1Q0FBUSxHQUFSO1FBQUEsaUJBOEJDO1FBNUJHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN6QyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDM0MsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDakIsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0MsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFjN0IsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQTtJQUNULENBQUM7SUFJRCx1Q0FBUSxHQUFSO1FBRUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQTVKTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsazhJQStGRDtTQUNaLENBQUM7OzRCQUFBO0lBMkRGLDJCQUFDOztBQUFELENBekRBLEFBeURDLElBQUE7QUF6RFksNEJBQW9CLHVCQXlEaEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2JhbGxldC9lZGl0U3R1ZGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7R3JvdXBTZXJ2aWNlfSBmcm9tIFwiLi9ncm91cC5zZXJ2aWNlXCI7XG5pbXBvcnQge2ZvckVhY2h9IGZyb20gXCIuLi8uLi8uLi8uLi9wdWJsaWMvanMvdmVuZG9yL0Bhbmd1bGFyL3JvdXRlci9zcmMvdXRpbHMvY29sbGVjdGlvblwiO1xuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi4vZ3JpZFBhbmVsLnNlcnZpY2VcIjtcbmltcG9ydCB7QmFsbGV0RGV0YWlsc1NlcnZpY2V9IGZyb20gXCIuL2JhbGxldERldGFpbHMuc2VydmljZVwiO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybUdyb3VwfSBmcm9tIFwiLi4vLi4vLi4vLi4vcHVibGljL2pzL3ZlbmRvci9AYW5ndWxhci9mb3Jtcy9zcmMvbW9kZWxcIjtcbmltcG9ydCB7VmFsaWRhdG9yc30gZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvZm9ybXMvc3JjL3ZhbGlkYXRvcnNcIjtcbmltcG9ydCB7U3R1ZGVudH0gZnJvbSBcIi4vc3R1ZGVudFwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdncm91cCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcblxuICAgICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCIgKm5nSWY9XCJkaXNwbGF5X2VkaXRcIj5cbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2dyaWRfbmFtZSc6IHN0dWRlbnRfaW5mby5jb3Vyc2VfdHlwZSwgJ21hc3Rlcl92YWwnOiBzdHVkZW50X2luZm8uc3RhZ2V9XCI+XG4gICAgICAgICAgICA8YnV0dG9uPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCIgPjwvaT5CQUNLPC9idXR0b24+PC9hPlxuICAgICAgIDwvbmF2PlxuICAgIFxuICAgIDxkaXYgICpuZ0lmPVwiZGlzcGxheV9lZGl0XCI+IFxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCI+XG4gICAgICAgICAgICAgICAgPGgxPnt7c3R1ZGVudF9pbmZvLnByb2ZpbGVbMV0uZmlyc3RuYW1lfX0gIHt7c3R1ZGVudF9pbmZvLnByb2ZpbGVbMF0ubm9tfX08L2gxPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tPGgyPnt7c3R1ZGVudF9pbmZvLmFnZX19IHllYXJzIG9sZDwvaDI+LS0+XG4gICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICA8Zm9ybSAjc3R1ZGVudEZvcm09XCJuZ0Zvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiICA+XG4gICAgICAgICAgICAgICAgPCEtLTxkaXYgW2Zvcm1Hcm91cF09XCJzdHVkZW50R3JvdXBcIj4gICAtLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiRE5JXCIgPkROSTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15QXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkROSVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkROSVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5ETkl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLkROSVwiIG5hbWU9XCJETklcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjRE5JPVwibmdNb2RlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiRmF0aGVyXCIgPkZhdGhlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15QXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZhdGhlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZhdGhlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5mYXRoZXJ9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLmZhdGhlclwiIG5hbWU9XCJmYXRoZXJcIlxuICAgICAgICAgICAgICAgICNmYXRoZXI9XCJuZ01vZGVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1mb3JtQ29udHJvbE5hbWU9XCJETklcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1bZm9ybUNvbnRyb2xdPVwic3R1ZGVudEdyb3VwLmNvbnRyb2xzWydETkknXVwiLS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgW2Rpc2FibGVkXT1cIiFzdHVkZW50Rm9ybS5mb3JtLnZhbGlkXCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+VmFsaWRlcjwvYnV0dG9uPi0tPlxuICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgPC9mb3JtPiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGxhYmVsPkJFQ0E8L2xhYmVsPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08aW5wdXQgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWNsYXNzPVwiZm9ybS1jb250cm9sXCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tdHlwZT1cInRleHRcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1pZD1cIkJFQ0FcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1uYW1lPVwiQkVDQVwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWZvcm1Db250cm9sTmFtZT1cIkJFQ0FcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS12YWx1ZT1cInt7c3R1ZGVudF9pbmZvLkJFQ0F9fVwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVtmb3JtQ29udHJvbF09XCJzdHVkZW50R3JvdXAuY29udHJvbHNbJ0JFQ0EnXVwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0mZ3Q7LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGxhYmVsID5GYXRoZXI8L2xhYmVsPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08aW5wdXQgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWNsYXNzPVwiZm9ybS1jb250cm9sXCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tdHlwZT1cInRleHRcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1pZD1cImZhdGhlclwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLW5hbWU9XCJmYXRoZXJcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1mb3JtQ29udHJvbE5hbWU9XCJmYXRoZXJcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS12YWx1ZT1cInt7c3R1ZGVudF9pbmZvLmZhdGhlcn19XCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tW2Zvcm1Db250cm9sXT1cInN0dWRlbnRHcm91cC5jb250cm9sc1snZmF0aGVyJ11cIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0mZ3Q7LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGxhYmVsPkludG9sZXJlbmNlPC9sYWJlbD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGlucHV0IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1jbGFzcz1cImZvcm0tY29udHJvbFwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLXR5cGU9XCJ0ZXh0XCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0taWQ9XCJpbnRvbGVyZW5jaWFcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1uYW1lPVwiaW50b2xlcmVuY2lhXCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tZm9ybUNvbnRyb2xOYW1lPVwiaW50b2xlcmVuY2lhXCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5pbnRvbGVyZW5jaWF9fVwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVtmb3JtQ29udHJvbF09XCJzdHVkZW50R3JvdXAuY29udHJvbHNbJ2ludG9sZXJlbmNpYSddXCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tJmd0Oy0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICBcbiAgICAgIDwvZGl2PmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBFZGl0U3R1ZGVudENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9ncmlkU2VydmljZSA6IEdyaWRQYW5lbFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX2dyb3VwU2VydmljZTogR3JvdXBTZXJ2aWNlLCAgcHJpdmF0ZSBfYmFsbGV0RGV0YWlsc1NlcnZpY2U6IEJhbGxldERldGFpbHNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9odHRwOiBIdHRwKXt9XG5cbiAgICBwcml2YXRlIHN1YjogYW55O1xuXG4gICAgb2JqX2lkO1xuICAgIHZhbHVlcztcbiAgICBkaXNwbGF5X2VkaXQgPSBmYWxzZTtcbiAgICBncm91cHMgPSBbXTtcbiAgICBzdHVkZW50ID0ge307XG4gICAgc3R1ZGVudF9pbmZvO1xuICAgIGN1cnJlbnRHcm91cCA9ICcnO1xuICAgIHN0dWRlbnRHcm91cDtcbiAgICBtb2RlbDtcbiAgICBuZ09uSW5pdCgpXG4gICAge1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5vYmpfaWQgPSBwYXJhbXNbJ3JlY29yZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcbiAgICAgICAgfSk7XG4gICAgICAgY29uc29sZS5sb2codGhpcy5vYmpfaWQpXG4gICAgICAgY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQpO1xuICAgICAgIC8vdGhpcy5zdHVkZW50ID0gdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWRbdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQuZmluZEluZGV4KHggPT4geC5faWQgPT0gdGhpcy5vYmpfaWQpXTtcbiAgICAgICAgdGhpcy5fYmFsbGV0RGV0YWlsc1NlcnZpY2UuZ2V0RGF0YXModGhpcy5vYmpfaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRfaW5mbyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwgPSBuZXcgU3R1ZGVudChkYXRhLkROSSxkYXRhLmZhdGhlcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheV9lZGl0ID0gdHJ1ZTtcblxuXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zdHVkZW50R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHsgJ0ROSSc6IG5ldyBGb3JtQ29udHJvbCgpfSk7XG4gICAgICAgICAgICAgICAgIC8vICAgdGhpcy5zdHVkZW50R3JvdXAuY29udHJvbHNbXCJETklcIl0uc2V0VmFsdWUodGhpcy5zdHVkZW50X2luZm8uRE5JKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gIHRoaXMuc3R1ZGVudEdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgIEROSTpuZXcgRm9ybUNvbnRyb2woKVxuICAgICAgICAgICAgICAgICAgICAvLyAvLyAgICAgQkVDQTogbmV3IEZvcm1Db250cm9sKCksXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vICAgICBmYXRoZXI6IG5ldyBGb3JtQ29udHJvbCgpLFxuICAgICAgICAgICAgICAgICAgICAvLyAvLyAgICAgaW50b2xlcmVuY2lhOiBuZXcgRm9ybUNvbnRyb2woKVxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcblxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcblxuICAgIG9uU3VibWl0KCkge1xuXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tb2RlbClcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9