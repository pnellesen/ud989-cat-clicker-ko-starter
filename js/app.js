var CatModel = function () {
	this.name = ko.observable("Allergy Cat");
	this.url = ko.observable("http://img2.timeinc.net/health/img/web/2013/03/slides/cat-allergies-400x400.jpg");
	this.levels= ko.observableArray(["Newborn","Infant","Kitten","Fullgrown"]);
	this.nicknames = ko.observableArray(["Big Eyes", "OJ", "Orange Whip"]);
	this.level = ko.observable("Newborn");
	this.clickCount= ko.observable(0);
	
}
var catViewModel = function() {
	var self = this;
	this.currentCat = ko.observable(new CatModel());
	this.incrementCount = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
		if (self.currentCat().clickCount() == 10) {
			self.currentCat().level(self.currentCat().levels()[1]);
		} else if (self.currentCat().clickCount() == 15) {
			self.currentCat().level(self.currentCat().levels()[2]);
		} else if (self.currentCat().clickCount() == 20) {
			self.currentCat().level(self.currentCat().levels()[3]);
		}

	};
};

ko.applyBindings(new catViewModel());

