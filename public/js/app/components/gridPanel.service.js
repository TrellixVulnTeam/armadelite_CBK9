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
const core_1 = require("@angular/core");
const global_1 = require("../global");
const http_1 = require("@angular/http");
const Observable_1 = require("rxjs/Observable");
let GridPanelService = class GridPanelService {
    constructor(_http) {
        this._http = _http;
        this.dataGrid = [];
        this.keysName = [];
        this.colTitle = [];
        this.originalData = this.dataGrid;
    }
    getDatas(grid_name) {
        this.dataGrid = [];
        this.keysName = [];
        this.colTitle = [];
        let query = "grid_name=" + grid_name;
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'data_grid?' + query;
        return this._http.get(completeUrl)
            .map(response => {
            console.log(response);
            let data = response.json();
            console.log(data);
            for (var i in data[0].config) {
                // if (key != '_id' && key != 'step_id'){
                console.log(data[0].config[i]);
                // console.lota[0].config[i] === "object"){
                var result = "";
                if (typeof data[0].config[i].field_panel_name != 'undefined') {
                    //var j = 0;
                    for (var q in data[0].config[i].field_panel_values) {
                        // console.log(p)
                        // console.log(q);
                        // result += p + " , " + data[0].colNames[i][p] + "\n";
                        // console.log(p+"_"+data[0].colNames[i][p][j])
                        // this.keysName.push(p+"_"+data[0].colNames[i][p][j]);
                        this.keysName.push(data[0].config[i].field_panel_name + '_' + data[0].config[i].field_panel_values[q].data);
                        this.colTitle.push({ "title": data[0].config[i].field_panel_values[q].title, "key": data[0].config[i].field_panel_name + '_' + data[0].config[i].field_panel_values[q].data, "type": "field_panel" });
                    }
                }
                else if (typeof data[0].config[i].type != 'undefined') {
                    switch (data[0].config[i].type) {
                        case 'checkbox':
                            {
                                this.keysName.push(data[0].config[i].data);
                                this.colTitle.push({ "title": data[0].config[i].title, "key": data[0].config[i].data, "type": "checkbox" });
                            }
                            break;
                    }
                }
                else {
                    this.keysName.push(data[0].config[i].data);
                    this.colTitle.push({ "title": data[0].config[i].title, "key": data[0].config[i].data, "type": "value" });
                }
            }
            data.shift();
            console.log(this.keysName);
            console.log(this.colTitle);
            this.dataGrid = data;
            this.originalData = this.dataGrid;
            return 'ok';
        })
            .catch(error => Observable_1.Observable.throw(error));
    }
    updateCheckBox(val) {
    }
    getActivatedGrids() {
        // let query = "master="+master_name;
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'get_grids';
        return this._http.get(completeUrl)
            .toPromise().then(response => response.json())
            .catch(error => Observable_1.Observable.throw(error));
    }
    filterParNom(obj, arg) {
        console.log(obj);
        console.log(arg);
        console.log(this);
        let key = this.key;
        let value = this.value;
        console.log(key);
        console.log(value);
        console.log(obj[key]);
        // var res = value.match(/obj[key]/g);
        if (value.indexOf(obj[key]) >= 0) {
            return true;
        }
        else {
            return false;
        }
        //console.log(res);
        // if (res != null)
        // {
        //
        // // }
        // // if (obj[key] === value) {
        //      return true;
        //
        // } else {
        //     return false
        // }
    }
    filterData(value, key) {
        console.log(value);
        //this.originalData = this.dataGrid;
        if (value == '') {
            this.dataGrid = this.originalData;
        }
        else {
            let result = this.dataGrid.filter(this.filterParNom, { "key": key, "value": value });
            console.log(result);
            if (result.length > 0) {
                this.dataGrid = result;
            }
            else {
                this.dataGrid = this.originalData;
            }
        }
        //console.log(arrByNom);
    }
    updateCheckbox(value, _id) {
        // console.log('saveDemande');
        // console.log(form );
        //this._formService.arraySteps.push({"step_id": currentStep});
        let body = JSON.stringify({ "value": value, "_id": _id });
        //
        // console.log("body");
        // console.log(body);
        const headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // return this._http.post('http://localhost:3000/demand', body, {headers: headers})
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'update_checkbox';
        return this._http.post(completeUrl, body, { headers: headers })
            .map(response => response)
            .catch(error => Observable_1.Observable.throw(error.json()));
    }
};
GridPanelService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], GridPanelService);
exports.GridPanelService = GridPanelService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JpZFBhbmVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6Qyx5QkFBK0IsV0FBVyxDQUFDLENBQUE7QUFDM0MsdUJBQTRDLGVBQWUsQ0FBQyxDQUFBO0FBQzVELDZCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBSTdDO0lBRUksWUFBcUIsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFDaEMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsaUJBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBSk0sQ0FBQztJQU1wQyxRQUFRLENBQUMsU0FBUztRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksS0FBSyxHQUFHLFlBQVksR0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxPQUFPLEdBQUUsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFDLFlBQVksR0FBQyxLQUFLLENBQUM7UUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQzthQUM3QixHQUFHLENBQUMsUUFBUTtZQUVULE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElB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R0FBRyxpQkFBaUIsQ0FBQztRQUM5RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUN4RCxHQUFHLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQzthQUN6QixLQUFLLENBQUMsS0FBSyxJQUFJLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztBQUVMLENBQUM7QUE3SkQ7SUFBQyxpQkFBVSxFQUFFOztvQkFBQTtBQUNBLHdCQUFnQixtQkE0SjVCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ncmlkUGFuZWwuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTdGVwTW9kZWx9IGZyb20gXCIuLi9FbmdpbmUvc3RlcE1vZGVsXCI7XHJcbmltcG9ydCB7IEdsb2JhbFZhcmlhYmxlIH0gZnJvbSBcIi4uL2dsb2JhbFwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgaW5jbHVkZXMgPSByZXF1aXJlKFwiY29yZS1qcy9mbi9zdHJpbmcvaW5jbHVkZXNcIik7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcmlkUGFuZWxTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cclxuICAgIGRhdGFHcmlkID0gW107XHJcbiAgICBrZXlzTmFtZSA9IFtdO1xyXG4gICAgY29sVGl0bGUgPSBbXTtcclxuICAgIG9yaWdpbmFsRGF0YSA9IHRoaXMuZGF0YUdyaWQ7XHJcblxyXG4gICAgZ2V0RGF0YXMoZ3JpZF9uYW1lKXtcclxuICAgICAgICB0aGlzLmRhdGFHcmlkID0gW107XHJcbiAgICAgICAgdGhpcy5rZXlzTmFtZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29sVGl0bGUgPSBbXTtcclxuICAgICAgICBsZXQgcXVlcnkgPSBcImdyaWRfbmFtZT1cIitncmlkX25hbWU7XHJcbiAgICAgICAgbGV0IGhlYWRlcnM9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMKydkYXRhX2dyaWQ/JytxdWVyeTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoY29tcGxldGVVcmwpXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZGF0YVswXS5jb25maWcpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChrZXkgIT0gJ19pZCcgJiYga2V5ICE9ICdzdGVwX2lkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVswXS5jb25maWdbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG90YVswXS5jb25maWdbaV0gPT09IFwib2JqZWN0XCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBkYXRhWzBdLmNvbmZpZ1tpXS5maWVsZF9wYW5lbF9uYW1lICE9ICd1bmRlZmluZWQnICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBqID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcSBpbiBkYXRhWzBdLmNvbmZpZ1tpXS5maWVsZF9wYW5lbF92YWx1ZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzdWx0ICs9IHAgKyBcIiAsIFwiICsgZGF0YVswXS5jb2xOYW1lc1tpXVtwXSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwK1wiX1wiK2RhdGFbMF0uY29sTmFtZXNbaV1bcF1bal0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmtleXNOYW1lLnB1c2gocCtcIl9cIitkYXRhWzBdLmNvbE5hbWVzW2ldW3BdW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMua2V5c05hbWUucHVzaChkYXRhWzBdLmNvbmZpZ1tpXS5maWVsZF9wYW5lbF9uYW1lICsgJ18nICsgZGF0YVswXS5jb25maWdbaV0uZmllbGRfcGFuZWxfdmFsdWVzW3FdLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xUaXRsZS5wdXNoKHtcInRpdGxlXCI6ZGF0YVswXS5jb25maWdbaV0uZmllbGRfcGFuZWxfdmFsdWVzW3FdLnRpdGxlLCBcImtleVwiIDogZGF0YVswXS5jb25maWdbaV0uZmllbGRfcGFuZWxfbmFtZSArICdfJyArIGRhdGFbMF0uY29uZmlnW2ldLmZpZWxkX3BhbmVsX3ZhbHVlc1txXS5kYXRhLCBcInR5cGVcIjogXCJmaWVsZF9wYW5lbFwifSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFbMF0uY29sTmFtZXNbaV1bcF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2orKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHR5cGVvZiBkYXRhWzBdLmNvbmZpZ1tpXS50eXBlICE9ICd1bmRlZmluZWQnICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGRhdGFbMF0uY29uZmlnW2ldLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMua2V5c05hbWUucHVzaChkYXRhWzBdLmNvbmZpZ1tpXS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbFRpdGxlLnB1c2goe1widGl0bGVcIjogZGF0YVswXS5jb25maWdbaV0udGl0bGUsIFwia2V5XCI6IGRhdGFbMF0uY29uZmlnW2ldLmRhdGEsIFwidHlwZVwiOiBcImNoZWNrYm94XCJ9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlzTmFtZS5wdXNoKGRhdGFbMF0uY29uZmlnW2ldLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbFRpdGxlLnB1c2goe1widGl0bGVcIjogZGF0YVswXS5jb25maWdbaV0udGl0bGUsIFwia2V5XCI6IGRhdGFbMF0uY29uZmlnW2ldLmRhdGEsIFwidHlwZVwiOiBcInZhbHVlXCJ9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRhdGEuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMua2V5c05hbWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb2xUaXRsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFHcmlkID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JpZ2luYWxEYXRhID0gdGhpcy5kYXRhR3JpZDtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnb2snXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBsZXQgb2JqczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBzdGVwID0gbmV3IFN0ZXBNb2RlbChkYXRhW2ldLnN0ZXBfaWQsIGRhdGFbaV0udHlwZSwgZGF0YVtpXS5jb25maWd1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBvYmpzLnB1c2goc3RlcCk7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIG9ianM7XHJcbiAgICAgICAgICAgIC8vfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNoZWNrQm94KHZhbCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2YXRlZEdyaWRzKCl7XHJcbiAgICAgICAgLy8gbGV0IHF1ZXJ5ID0gXCJtYXN0ZXI9XCIrbWFzdGVyX25hbWU7XHJcbiAgICAgICAgbGV0IGhlYWRlcnM9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMKydnZXRfZ3JpZHMnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyUGFyTm9tKG9iaiwgYXJnKXtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cob2JqKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcmcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICAgICAgbGV0IGtleSA9IHRoaXMua2V5O1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coa2V5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cob2JqW2tleV0pXHJcbiAgICAgICAgLy8gdmFyIHJlcyA9IHZhbHVlLm1hdGNoKC9vYmpba2V5XS9nKTtcclxuICAgICAgICBpZiAodmFsdWUuaW5kZXhPZihvYmpba2V5XSkgPj0wKVxyXG4gICAgICAgIHtyZXR1cm4gdHJ1ZX1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAvLyBpZiAocmVzICE9IG51bGwpXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gLy8gfVxyXG4gICAgICAgIC8vIC8vIGlmIChvYmpba2V5XSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlckRhdGEodmFsdWUsIGtleSl7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIC8vdGhpcy5vcmlnaW5hbERhdGEgPSB0aGlzLmRhdGFHcmlkO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSAnJyl7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUdyaWQgPSB0aGlzLm9yaWdpbmFsRGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmRhdGFHcmlkLmZpbHRlcih0aGlzLmZpbHRlclBhck5vbSwge1wia2V5XCI6a2V5LCBcInZhbHVlXCI6IHZhbHVlfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhR3JpZCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YUdyaWQgPSB0aGlzLm9yaWdpbmFsRGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKGFyckJ5Tm9tKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDaGVja2JveCh2YWx1ZSxfaWQpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzYXZlRGVtYW5kZScpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZvcm0gKTtcclxuXHJcbiAgICAgICAgLy90aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLnB1c2goe1wic3RlcF9pZFwiOiBjdXJyZW50U3RlcH0pO1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1widmFsdWVcIiA6IHZhbHVlLCBcIl9pZFwiOiBfaWR9KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYm9keVwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhib2R5KTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZGVtYW5kJywgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMICsgJ3VwZGF0ZV9jaGVja2JveCc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChjb21wbGV0ZVVybCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
