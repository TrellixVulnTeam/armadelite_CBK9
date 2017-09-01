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
var student_service_1 = require("./student.service");
var StudentComponent = (function () {
    function StudentComponent(router, _gridService, _groupService, _balletDetailsService, _studentService, route, _http) {
        this.router = router;
        this._gridService = _gridService;
        this._groupService = _groupService;
        this._balletDetailsService = _balletDetailsService;
        this._studentService = _studentService;
        this.route = route;
        this._http = _http;
        this.display_edit = false;
        this.student = {};
        this.becas = ['15%', '20%',
            '25%', '50%'];
        this.submitted = false;
    }
    StudentComponent.prototype.ngOnInit = function () {
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
            _this.model = new student_1.Student(data._id, data.DNI, data.BECA, data.father, data.intolerancia, data.email_2, data.phone_2, data.note);
            console.log(_this.model);
            _this.display_edit = true;
        }, function (error) { return console.log(error); });
    };
    StudentComponent.prototype.onSubmit = function () {
        this._studentService.updateStudent(this.model)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log(error); });
        this.submitted = true;
        console.log(this.model);
    };
    StudentComponent = __decorate([
        core_1.Component({
            selector: 'group',
            template: "\n    \n\n\n    \n    <div  *ngIf=\"display_edit\"> \n          \n          <div class=\"panel-heading panel-heading-custom\">\n            <div  class=\"row\" align=\"left\">\n                <div class=\"col-md-2\">\n                    <nav class=\"form-navArrow\" *ngIf=\"display_edit\">\n                        <a [routerLink]=\"['/grid']\" [queryParams]=\"{'grid_name': student_info.course_type, 'master_val': student_info.stage}\">\n                        <button class=\"btn btn-warning\"><i class=\"glyphicon glyphicon-triangle-left\" ></i>BACK</button></a>\n                    </nav>\n                </div>\n                <div class=\"col-md-10\" align=\"center\">\n                    <h2>{{student_info.profile[1].firstname}}  {{student_info.profile[0].nom}}</h2>\n                </div>\n            </div>\n           </div>\n          <!--<h2>{{student_info.age}} years old</h2>-->\n    \n        <div class=\"panel-body\">\n            <form class=\"form-horizontal\" #studentForm=\"ngForm\" (ngSubmit)=\"onSubmit()\"  >\n                <div class=\"form-group\">\n                     <label for=\"DNI\" class=\"col-sm-2 control-label\" >DNI</label>\n                     <div class=\"col-sm-10\">\n                         <input \n                            myAutofocus\n                            class=\"form-control\"\n                            type=\"text\"\n                            id=\"DNI\"\n                            name=\"DNI\"\n                            value=\"{{student_info.DNI}}\"\n                              [(ngModel)]=\"model.DNI\" name=\"DNI\"\n                                #DNI=\"ngModel\">\n                     </div>\n                </div>\n                \n                <div class=\"form-group\">\n                    <label for=\"BECA\" class=\"col-sm-2 control-label\" >BECA</label>\n                    <div class=\"col-sm-10\">\n                        <select class=\"form-control\" id=\"BECA\"\n                            [(ngModel)]=\"model.BECA\" name=\"BECA\"\n                            #BECA=\"ngModel\" >\n                            <option *ngFor=\"let beca of becas\" [value]=\"beca\">{{beca}}</option>\n                        </select>\n                    </div>\n                </div>\n                \n                <div class=\"form-group\">\n                    <label for=\"Father\" class=\"col-sm-2 control-label\" >Father</label>\n                    <div class=\"col-sm-10\">\n                        <input \n                            class=\"form-control\"\n                            type=\"text\"\n                            id=\"father\"\n                            name=\"father\"\n                            value=\"{{student_info.father}}\"\n                            [(ngModel)]=\"model.father\" \n                            name=\"father\"\n                            #father=\"ngModel\">\n                    </div>\n                </div>\n                \n                <div class=\"form-group\">\n                    <label for=\"Intolerance\" class=\"col-sm-2 control-label\" >Intolerance</label>\n                    <div class=\"col-sm-10\">\n                        <input \n                            class=\"form-control\"\n                            type=\"text\"\n                            id=\"intolerancia\"\n                            name=\"intolerancia\"\n                            value=\"{{student_info.intolerancia}}\"\n                            [(ngModel)]=\"model.intolerancia\" \n                            name=\"intolerancia\"\n                            #intolerencia=\"ngModel\">\n                    </div>\n                </div>\n                 <div class=\"form-group\">\n                    <label for=\"phone2\" class=\"col-sm-2 control-label\" >Phone 2</label>\n                    <div class=\"col-sm-10\">\n                        <input \n                            class=\"form-control\"\n                            type=\"text\"\n                            id=\"phone2\"\n                            name=\"phone2\"\n                            value=\"{{student_info.phone2}}\"\n                            [(ngModel)]=\"model.phone2\" \n                            name=\"phone2\"\n                            #phone2=\"ngModel\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email2\" class=\"col-sm-2 control-label\" >Email 2</label>\n                    <div class=\"col-sm-10\">\n                        <input \n                            class=\"form-control\"\n                            type=\"text\"\n                            id=\"email2\"\n                            name=\"email2\"\n                            value=\"{{student_info.email2}}\"\n                            [(ngModel)]=\"model.email2\" \n                            name=\"email2\"\n                            #email2=\"ngModel\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"notes\" class=\"col-sm-2 control-label\" >Notes</label>\n                    <div class=\"col-sm-10\">\n                        <input \n                            class=\"form-control\"\n                            type=\"text\"\n                            id=\"notes\"\n                            name=\"notes\"\n                            value=\"{{student_info.notes}}\"\n                            [(ngModel)]=\"model.notes\" \n                            name=\"notes\"\n                            #notes=\"ngModel\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"col-sm-offset-2 col-sm-10\">\n                        <button type=\"submit\" class=\"btn btn-primary \" [disabled]=\"!studentForm.form.valid\">Submit</button>\n                    </div>\n                </div>\n            </form>    \n        </div>    \n    </div>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, gridPanel_service_1.GridPanelService, group_service_1.GroupService, balletDetails_service_1.BalletDetailsService, student_service_1.StudentService, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _c) || Object])
    ], StudentComponent);
    return StudentComponent;
    var _a, _b, _c;
}());
exports.StudentComponent = StudentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFsbGV0L3N0dWRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFDckQsQ0FBQyxDQURtRTtBQUNwRSx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUV6RSxxQkFBbUIsZUFBZSxDQUFDLENBQUE7QUFDbkMsOEJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0Msa0NBQStCLHNCQUFzQixDQUFDLENBQUE7QUFDdEQsc0NBQW1DLHlCQUF5QixDQUFDLENBQUE7QUFHN0Qsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBc0lqRDtJQUVJLDBCQUNZLE1BQWMsRUFBVSxZQUErQixFQUN2RCxhQUEyQixFQUFXLHFCQUEyQyxFQUNqRixlQUErQixFQUMvQixLQUFxQixFQUFVLEtBQVc7UUFIMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUN2RCxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUFXLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7UUFDakYsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQU10RCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBS2IsVUFBSyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUs7WUFDakIsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBc0JsQixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBbkNzQyxDQUFDO0lBZXpELG1DQUFRLEdBQVI7UUFBQSxpQkFrQkM7UUFmRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDekMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQzNDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUE7SUFDVCxDQUFDO0lBSUQsbUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDekMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFckIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQTtRQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUExTEw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLDY1TEFnSUg7U0FDVixDQUFDOzt3QkFBQTtJQXdERix1QkFBQzs7QUFBRCxDQXREQSxBQXNEQyxJQUFBO0FBdERZLHdCQUFnQixtQkFzRDVCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9iYWxsZXQvc3R1ZGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8vIGltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtHcm91cFNlcnZpY2V9IGZyb20gXCIuL2dyb3VwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtmb3JFYWNofSBmcm9tIFwiLi4vLi4vLi4vLi4vcHVibGljL2pzL3ZlbmRvci9AYW5ndWxhci9yb3V0ZXIvc3JjL3V0aWxzL2NvbGxlY3Rpb25cIjtcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi4vZ3JpZFBhbmVsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtCYWxsZXREZXRhaWxzU2VydmljZX0gZnJvbSBcIi4vYmFsbGV0RGV0YWlscy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1Hcm91cH0gZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvZm9ybXMvc3JjL21vZGVsXCI7XHJcbmltcG9ydCB7VmFsaWRhdG9yc30gZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvZm9ybXMvc3JjL3ZhbGlkYXRvcnNcIjtcclxuaW1wb3J0IHtTdHVkZW50fSBmcm9tIFwiLi9zdHVkZW50XCI7XHJcbmltcG9ydCB7U3R1ZGVudFNlcnZpY2V9IGZyb20gXCIuL3N0dWRlbnQuc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ3JvdXAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIFxyXG5cclxuXHJcbiAgICBcclxuICAgIDxkaXYgICpuZ0lmPVwiZGlzcGxheV9lZGl0XCI+IFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiPlxyXG4gICAgICAgICAgICA8ZGl2ICBjbGFzcz1cInJvd1wiIGFsaWduPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cImZvcm0tbmF2QXJyb3dcIiAqbmdJZj1cImRpc3BsYXlfZWRpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9ncmlkJ11cIiBbcXVlcnlQYXJhbXNdPVwieydncmlkX25hbWUnOiBzdHVkZW50X2luZm8uY291cnNlX3R5cGUsICdtYXN0ZXJfdmFsJzogc3R1ZGVudF9pbmZvLnN0YWdlfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiA+PC9pPkJBQ0s8L2J1dHRvbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTBcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57e3N0dWRlbnRfaW5mby5wcm9maWxlWzFdLmZpcnN0bmFtZX19ICB7e3N0dWRlbnRfaW5mby5wcm9maWxlWzBdLm5vbX19PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS08aDI+e3tzdHVkZW50X2luZm8uYWdlfX0geWVhcnMgb2xkPC9oMj4tLT5cclxuICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCIgI3N0dWRlbnRGb3JtPVwibmdGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkROSVwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5ETkk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteUF1dG9mb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJETklcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkROSVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7c3R1ZGVudF9pbmZvLkROSX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5ETklcIiBuYW1lPVwiRE5JXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjRE5JPVwibmdNb2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJCRUNBXCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPkJFQ0E8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiQkVDQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLkJFQ0FcIiBuYW1lPVwiQkVDQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjQkVDQT1cIm5nTW9kZWxcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBiZWNhIG9mIGJlY2FzXCIgW3ZhbHVlXT1cImJlY2FcIj57e2JlY2F9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJGYXRoZXJcIiBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+RmF0aGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmF0aGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmYXRoZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5mYXRoZXJ9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLmZhdGhlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZhdGhlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZmF0aGVyPVwibmdNb2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkludG9sZXJhbmNlXCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPkludG9sZXJhbmNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW50b2xlcmFuY2lhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbnRvbGVyYW5jaWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5pbnRvbGVyYW5jaWF9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLmludG9sZXJhbmNpYVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImludG9sZXJhbmNpYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjaW50b2xlcmVuY2lhPVwibmdNb2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGhvbmUyXCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPlBob25lIDI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwaG9uZTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7c3R1ZGVudF9pbmZvLnBob25lMn19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwucGhvbmUyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNwaG9uZTI9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsMlwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5FbWFpbCAyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWwyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3N0dWRlbnRfaW5mby5lbWFpbDJ9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLmVtYWlsMlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZW1haWwyPVwibmdNb2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJub3Rlc1wiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5Ob3RlczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vdGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub3Rlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7c3R1ZGVudF9pbmZvLm5vdGVzfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5ub3Rlc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vdGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNub3Rlcz1cIm5nTW9kZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLW9mZnNldC0yIGNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBcIiBbZGlzYWJsZWRdPVwiIXN0dWRlbnRGb3JtLmZvcm0udmFsaWRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+ICAgIFxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgIDwvZGl2PmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHVkZW50Q29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9ncmlkU2VydmljZSA6IEdyaWRQYW5lbFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfZ3JvdXBTZXJ2aWNlOiBHcm91cFNlcnZpY2UsICBwcml2YXRlIF9iYWxsZXREZXRhaWxzU2VydmljZTogQmFsbGV0RGV0YWlsc1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfc3R1ZGVudFNlcnZpY2U6IFN0dWRlbnRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9odHRwOiBIdHRwKXt9XHJcblxyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuXHJcbiAgICBvYmpfaWQ7XHJcbiAgICB2YWx1ZXM7XHJcbiAgICBkaXNwbGF5X2VkaXQgPSBmYWxzZTtcclxuICAgIHN0dWRlbnQgPSB7fTtcclxuICAgIHN0dWRlbnRfaW5mbztcclxuICAgIHN0dWRlbnRHcm91cDtcclxuICAgIG1vZGVsO1xyXG5cclxuICAgIGJlY2FzID0gWycxNSUnLCAnMjAlJyxcclxuICAgICAgICAnMjUlJywgJzUwJSddO1xyXG5cclxuICAgIG5nT25Jbml0KClcclxuICAgIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vYmpfaWQgPSBwYXJhbXNbJ3JlY29yZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ial9pZClcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZCk7XHJcbiAgICAgICAgdGhpcy5fYmFsbGV0RGV0YWlsc1NlcnZpY2UuZ2V0RGF0YXModGhpcy5vYmpfaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRfaW5mbyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBTdHVkZW50KGRhdGEuX2lkLGRhdGEuRE5JLGRhdGEuQkVDQSwgZGF0YS5mYXRoZXIsIGRhdGEuaW50b2xlcmFuY2lhLCBkYXRhLmVtYWlsXzIsIGRhdGEucGhvbmVfMiwgZGF0YS5ub3RlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vZGVsKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlfZWRpdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICB0aGlzLl9zdHVkZW50U2VydmljZS51cGRhdGVTdHVkZW50KHRoaXMubW9kZWwpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tb2RlbClcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
