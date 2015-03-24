var catData = [
     	  {url:"http://mentoringmoments.org/wp-content/uploads/2011/11/cat1-400x400.png",name:"Cat 1",clickCount:0,nicknames:["My first cat"]},
     	  {url:"http://img2.timeinc.net/health/img/web/2013/03/slides/cat-allergies-400x400.jpg",name:"Allergy Cat",clickCount:0,nicknames:["Big Eyes", "OJ", "Orange Whip"]},
     	  {url:"http://img2.timeinc.net/health/img/web/2012/10/blogs/fat-cat-overweight-400x400.jpg",name:"Fat Cat",clickCount:0,nicknames:["Tubbo", "Sir Lard Bottom"]},
     	  {url:"http://healthnewsandviews.files.wordpress.com/2012/12/kitty-cat-400x400.jpg",name:"Kitty Cat",clickCount:0,nicknames:["JustACat"]},
     	  {url:"http://fullyfeline.com/wp-content/uploads/2012/10/black-cat-5a-400x400.jpg",name:"Black Cat",clickCount:0,nicknames:["Diva","Blackie","Saaaataaannn!"]}
     	];
var CatModel = function (catItem) {
	/*
	this.name = ko.observable("Allergy Cat");
	this.url = ko.observable("http:/img2.timeinc.net/health/img/web/2013/03/slides/cat-allergies-400x400.jpg");
	this.levels= ko.observableArray(["Newborn","Infant","Kitten","Fullgrown"]);
	this.nicknames = ko.observableArray(["Big Eyes", "OJ", "Orange Whip"]);
	this.clickCount= ko.observable(0);
	*/

	this.name = ko.observable(catItem.name);
	this.url = ko.observable(catItem.url);
	this.levels= ko.observableArray(["Newborn","Infant","Kitten","Fullgrown"]);
	this.nicknames = ko.observableArray(catItem.nicknames);
	this.clickCount= ko.observable(catItem.clickCount);
	this.level = ko.computed(function() {
		var level;
		if (this.clickCount() < 10) {
			level = this.levels()[0];
		} else if (this.clickCount() < 15) {
			level = this.levels()[1];
		} else if (this.clickCount() < 20) {
			level = this.levels()[2];
		} else {
			level = this.levels()[3];
		}
		return level;
	}, this);
}

var catViewModel = function() {
	var self = this;
	this.catList = ko.observableArray([]);
	catData.forEach(function(thisCat) {
		self.catList.push(new CatModel(thisCat));
	})
	this.currentCat = ko.observable(this.catList()[0]);
	this.incrementCount = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
	
	this.selectCat = function(whichCat) {
		self.currentCat(whichCat);
	}
	
};

ko.applyBindings(new catViewModel());

