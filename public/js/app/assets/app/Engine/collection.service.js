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
const http_1 = require("@angular/http");
const core_1 = require("@angular/core");
require('rxjs/Rx');
const Observable_1 = require("rxjs/Observable");
// import { Marque } from "./marque";
const global_1 = require("../global");
const step_service_1 = require("./step.service");
const form_service_1 = require("../components/form.service");
let CollectionService = class CollectionService {
    constructor(_http, _formService, _stepService) {
        this._http = _http;
        this._formService = _formService;
        this._stepService = _stepService;
    }
    /*
        PARAMS: collName --> Name of the collection where are stored the data
                filters  --> Object with the filter name and the step_id where is stored the value of the filter
                select   --> The value that will be retrieved in the collection and displayed on the screen
     */
    getFormData(_id, collName, filters, select) {
        let filtersNameToString = [];
        let filtersValueToString = [];
        for (let i = 0; i < filters.length; i++) {
            filtersNameToString.push(filters[i].field);
            filtersValueToString.push(this.getValueSelected(filters[i].step_id));
        }
        var query = '_id=' + _id + '&collName=' + collName + '&filters_name=' + filtersNameToString + '&filters_value=' + filtersValueToString;
        let completeUrl = global_1.GlobalVariable.BASE_URL + 'getFormData?' + query;
        //return Promise.resolve (this._http.get(completeUrl)
        //  let body = { "filters": filters, "collName" : collName};
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(completeUrl)
            .toPromise()
            .then(response => response.json())
            .catch(error => Observable_1.Observable.throw(error));
    }
    getDatas(collName, filters, select) {
        var filtersNameToString = [];
        var filtersValueToString = [];
        console.log(filters);
        console.log("FIELD FILTER SIZE");
        console.log(filters);
        console.log(select);
        if (filters.length > 0) {
            for (var i = 0; i < filters.length; i++) {
                filtersNameToString.push(filters[i].field);
                filtersValueToString.push(encodeURIComponent(this.getValueSelected(filters[i].step_id)));
                console.log(filtersValueToString);
            }
            // for (var i=0; i< filters.length;i++) {
            //     for (var j=0; i< filters[j].field.length;j++) {
            //         filtersNameToString.push(filters[i].field[j]);
            //         filtersValueToString.push(this.getValueSelected(filters[i].step_id[j]));
            //     }
            var query = 'collName=' + collName + '&filters_name=' + filtersNameToString + '&filters_value=' + filtersValueToString;
        }
        if (select != '') {
            query = query + '&select=' + select;
        }
        // console.log(filtersToString);
        let completeUrl = global_1.GlobalVariable.BASE_URL + 'custom_collection?' + query;
        //return Promise.resolve(this._http.get(completeUrl)
        //  let body = { "filters": filters, "collName" : collName};
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(completeUrl)
            .toPromise()
            .then(response => response.json())
            .catch(error => Observable_1.Observable.throw(error));
    }
    getValueSelected(stepId) {
        console.log(this._formService);
        console.log(this._stepService);
        //RETRIEVE IN STEP CONFIG FILE THE NAME OF SAVED VALUE FOR THE SPECIFIED STEP
        for (var item of this._stepService.steps) {
            if (item.step_id == stepId) {
                var valueForFormService = item.configuration.form_value.name;
            }
        }
        console.log(valueForFormService);
        // RETURN THE CONTENT OF VARIABLE PICKED UP IN STEP SERVICE
        for (var item of this._formService.arraySteps) {
            if (typeof eval('item.' + valueForFormService) != 'undefined') {
                return eval('item.' + valueForFormService);
            }
        }
        // return valueSelected;
    }
    extractData(res) {
        let body = res.json();
        return body.data || {};
    }
};
CollectionService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http, form_service_1.FormService, step_service_1.StepService])
], CollectionService);
exports.CollectionService = CollectionService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVuZ2luZS9jb2xsZWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFzRCxlQUFlLENBQUMsQ0FBQTtBQUN0RSx1QkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQiw2QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUU3QyxxQ0FBcUM7QUFDckMseUJBQStCLFdBQVcsQ0FBQyxDQUFBO0FBQzNDLCtCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLCtCQUEwQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRXZEO0lBRUssWUFBcUIsS0FBVyxFQUFVLFlBQXlCLEVBQVUsWUFBeUI7UUFBakYsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBQzNHOzs7O09BSUc7SUFDSCxXQUFXLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTTtRQUN0QyxJQUFJLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUM5QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQztRQUVELElBQUksS0FBSyxHQUFHLE1BQU0sR0FBRSxHQUFHLEdBQUcsWUFBWSxHQUFHLFFBQVEsR0FBRyxnQkFBZ0IsR0FBRyxtQkFBbUIsR0FBRyxpQkFBaUIsR0FBRyxvQkFBb0IsQ0FBQztRQUV0SSxJQUFJLFdBQVcsR0FBSSx1QkFBYyxDQUFDLFFBQVEsR0FBQyxjQUFjLEdBQUMsS0FBSyxDQUFDO1FBQ2hFLHFEQUFxRDtRQUNyRCw0REFBNEQ7UUFDNUQsSUFBSSxPQUFPLEdBQUUsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7YUFDN0IsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFFBQVEsSUFBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFNaEMsS0FBSyxDQUFDLEtBQUssSUFBSSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBRWhELENBQUM7SUFFRCxRQUFRLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNO1FBQzlCLElBQUksbUJBQW1CLEdBQUcsRUFBRSxDQUFBO1FBQzVCLElBQUksb0JBQW9CLEdBQUcsRUFBRSxDQUFBO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUM7WUFFdEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3RDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFekYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBRXRDLENBQUM7WUFFRCx5Q0FBeUM7WUFDekMsc0RBQXNEO1lBQ3RELHlEQUF5RDtZQUN6RCxtRkFBbUY7WUFDbkYsUUFBUTtZQUdSLElBQUksS0FBSyxHQUFHLFdBQVcsR0FBRyxRQUFRLEdBQUcsZ0JBQWdCLEdBQUcsbUJBQW1CLEdBQUcsaUJBQWlCLEdBQUcsb0JBQW9CLENBQUM7UUFDM0gsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ2QsS0FBSyxHQUFHLEtBQUssR0FBRyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3hDLENBQUM7UUFDRixnQ0FBZ0M7UUFDL0IsSUFBSSxXQUFXLEdBQUksdUJBQWMsQ0FBQyxRQUFRLEdBQUMsb0JBQW9CLEdBQUMsS0FBSyxDQUFDO1FBQ3RFLG9EQUFvRDtRQUN0RCw0REFBNEQ7UUFDMUQsSUFBSSxPQUFPLEdBQUUsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7YUFDN0IsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDakMsS0FBSyxDQUFDLEtBQUssSUFBSSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxNQUFNO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9CLDZFQUE2RTtRQUM3RSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNqRSxDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQywyREFBMkQ7UUFDM0QsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzVDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDLENBQUM7WUFDL0MsQ0FBQztRQUNMLENBQUM7UUFDRCx3QkFBd0I7SUFDNUIsQ0FBQztJQUVPLFdBQVcsQ0FBQyxHQUFhO1FBQzdCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFHLENBQUM7SUFDNUIsQ0FBQztBQUNELENBQUM7QUFwR0w7SUFBQyxpQkFBVSxFQUFFOztxQkFBQTtBQUNBLHlCQUFpQixvQkFtR3pCLENBQUEiLCJmaWxlIjoiYXNzZXRzL2FwcC9FbmdpbmUvY29sbGVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBSZXF1ZXN0T3B0aW9ucywgSGVhZGVycywgUmVzcG9uc2V9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuLy8gaW1wb3J0IHsgTWFycXVlIH0gZnJvbSBcIi4vbWFycXVlXCI7XHJcbmltcG9ydCB7IEdsb2JhbFZhcmlhYmxlIH0gZnJvbSBcIi4uL2dsb2JhbFwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS5zZXJ2aWNlXCI7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25TZXJ2aWNlIHsgXHJcblxyXG4gICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2UsIHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSkge31cclxuICAgIC8qXHJcbiAgICAgICAgUEFSQU1TOiBjb2xsTmFtZSAtLT4gTmFtZSBvZiB0aGUgY29sbGVjdGlvbiB3aGVyZSBhcmUgc3RvcmVkIHRoZSBkYXRhXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzICAtLT4gT2JqZWN0IHdpdGggdGhlIGZpbHRlciBuYW1lIGFuZCB0aGUgc3RlcF9pZCB3aGVyZSBpcyBzdG9yZWQgdGhlIHZhbHVlIG9mIHRoZSBmaWx0ZXJcclxuICAgICAgICAgICAgICAgIHNlbGVjdCAgIC0tPiBUaGUgdmFsdWUgdGhhdCB3aWxsIGJlIHJldHJpZXZlZCBpbiB0aGUgY29sbGVjdGlvbiBhbmQgZGlzcGxheWVkIG9uIHRoZSBzY3JlZW5cclxuICAgICAqL1xyXG4gICAgZ2V0Rm9ybURhdGEoX2lkLCBjb2xsTmFtZSwgZmlsdGVycywgc2VsZWN0KXtcclxuICAgICAgICBsZXQgZmlsdGVyc05hbWVUb1N0cmluZyA9IFtdO1xyXG4gICAgICAgIGxldCBmaWx0ZXJzVmFsdWVUb1N0cmluZyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgZmlsdGVycy5sZW5ndGg7aSsrKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnNOYW1lVG9TdHJpbmcucHVzaChmaWx0ZXJzW2ldLmZpZWxkKTtcclxuICAgICAgICAgICAgZmlsdGVyc1ZhbHVlVG9TdHJpbmcucHVzaCh0aGlzLmdldFZhbHVlU2VsZWN0ZWQoZmlsdGVyc1tpXS5zdGVwX2lkKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcXVlcnkgPSAnX2lkPScgK19pZCArICcmY29sbE5hbWU9JyArIGNvbGxOYW1lICsgJyZmaWx0ZXJzX25hbWU9JyArIGZpbHRlcnNOYW1lVG9TdHJpbmcgKyAnJmZpbHRlcnNfdmFsdWU9JyArIGZpbHRlcnNWYWx1ZVRvU3RyaW5nO1xyXG5cclxuICAgICAgICBsZXQgY29tcGxldGVVcmwgPSAgR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwrJ2dldEZvcm1EYXRhPycrcXVlcnk7XHJcbiAgICAgICAgLy9yZXR1cm4gUHJvbWlzZS5yZXNvbHZlICh0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcclxuICAgICAgICAvLyAgbGV0IGJvZHkgPSB7IFwiZmlsdGVyc1wiOiBmaWx0ZXJzLCBcImNvbGxOYW1lXCIgOiBjb2xsTmFtZX07XHJcbiAgICAgICAgbGV0IGhlYWRlcnM9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+cmVzcG9uc2UuanNvbigpKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vdGhpcy5nZXREYXRhcyhjb2xsTmFtZSwgZmlsdGVycywgc2VsZWN0KVxyXG5cclxuICAgICAgICAvLyByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YXMoY29sbE5hbWUsIGZpbHRlcnMsIHNlbGVjdCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgdmFyIGZpbHRlcnNOYW1lVG9TdHJpbmcgPSBbXVxyXG4gICAgICAgIHZhciBmaWx0ZXJzVmFsdWVUb1N0cmluZyA9IFtdXHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsdGVycyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGSUVMRCBGSUxURVIgU0laRVwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcnMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdCk7XHJcbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsdGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyc05hbWVUb1N0cmluZy5wdXNoKGZpbHRlcnNbaV0uZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyc1ZhbHVlVG9TdHJpbmcucHVzaChlbmNvZGVVUklDb21wb25lbnQodGhpcy5nZXRWYWx1ZVNlbGVjdGVkKGZpbHRlcnNbaV0uc3RlcF9pZCkpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXJzVmFsdWVUb1N0cmluZyk7XHJcbiAgICAgICAgICAgICAgICAvLyBmaWx0ZXJzVmFsdWVUb1N0cmluZy5wdXNoKCdBVURJJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGZvciAodmFyIGk9MDsgaTwgZmlsdGVycy5sZW5ndGg7aSsrKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBmb3IgKHZhciBqPTA7IGk8IGZpbHRlcnNbal0uZmllbGQubGVuZ3RoO2orKykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGZpbHRlcnNOYW1lVG9TdHJpbmcucHVzaChmaWx0ZXJzW2ldLmZpZWxkW2pdKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBmaWx0ZXJzVmFsdWVUb1N0cmluZy5wdXNoKHRoaXMuZ2V0VmFsdWVTZWxlY3RlZChmaWx0ZXJzW2ldLnN0ZXBfaWRbal0pKTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgcXVlcnkgPSAnY29sbE5hbWU9JyArIGNvbGxOYW1lICsgJyZmaWx0ZXJzX25hbWU9JyArIGZpbHRlcnNOYW1lVG9TdHJpbmcgKyAnJmZpbHRlcnNfdmFsdWU9JyArIGZpbHRlcnNWYWx1ZVRvU3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZWN0ICE9ICcnKXtcclxuICAgICAgICAgICAgcXVlcnkgPSBxdWVyeSArICcmc2VsZWN0PScgKyBzZWxlY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgLy8gY29uc29sZS5sb2coZmlsdGVyc1RvU3RyaW5nKTtcclxuICAgICAgICBsZXQgY29tcGxldGVVcmwgPSAgR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwrJ2N1c3RvbV9jb2xsZWN0aW9uPycrcXVlcnk7XHJcbiAgICAgICAgLy9yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxyXG4gICAgICAvLyAgbGV0IGJvZHkgPSB7IFwiZmlsdGVyc1wiOiBmaWx0ZXJzLCBcImNvbGxOYW1lXCIgOiBjb2xsTmFtZX07XHJcbiAgICAgICAgbGV0IGhlYWRlcnM9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VmFsdWVTZWxlY3RlZChzdGVwSWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2UpO1xyXG4gICAgICAgIC8vUkVUUklFVkUgSU4gU1RFUCBDT05GSUcgRklMRSBUSEUgTkFNRSBPRiBTQVZFRCBWQUxVRSBGT1IgVEhFIFNQRUNJRklFRCBTVEVQXHJcbiAgICAgICAgZm9yICh2YXIgaXRlbSBvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwcykge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5zdGVwX2lkID09IHN0ZXBJZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlRm9yRm9ybVNlcnZpY2UgPSBpdGVtLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlRm9yRm9ybVNlcnZpY2UpO1xyXG4gICAgICAgIC8vIFJFVFVSTiBUSEUgQ09OVEVOVCBPRiBWQVJJQUJMRSBQSUNLRUQgVVAgSU4gU1RFUCBTRVJWSUNFXHJcbiAgICAgICAgZm9yICh2YXIgaXRlbSBvZiB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZhbCgnaXRlbS4nICsgdmFsdWVGb3JGb3JtU2VydmljZSkgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmFsKCdpdGVtLicgKyB2YWx1ZUZvckZvcm1TZXJ2aWNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXR1cm4gdmFsdWVTZWxlY3RlZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcclxuICAgICAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGJvZHkuZGF0YSB8fCB7IH07XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=