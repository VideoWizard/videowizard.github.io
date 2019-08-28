/*:
 * @plugindesc alt menu
 * @author SumRndmDde
 *
 * @param BackgroundPicture
 * @desc The menu background
 * @default Sword
 *
 * @param Window Opacity
 * @desc Opacity of the windows
 * @default 255
 *
 * @help
 */

(function() {

	var background = String(PluginManager.parameters("AltMenu")['BackgroundPicture']);
	var opacity = Number(PluginManager.parameters("AltMenu")['Window Opacity']);

	var _Scene_MenuBase_createBackground = Scene_MenuBase.prototype.createBackground;
	Scene_MenuBase.prototype.createBackground = function() {
		if(background) {
			this._backgroundSprite = new Sprite();
	    	this._backgroundSprite.bitmap = ImageManager.loadPicture(background);
	    	this.addChild(this._backgroundSprite);
		} else {
			_Scene_MenuBase_createBackground.call(this);
		}
	};

	var _Scene_Menu_create = Scene_Menu.prototype.create;
	Scene_Menu.prototype.create = function() {
	    _Scene_Menu_create.call(this);

		this._commandWindow.x = 0;
		this._commandWindow.y = 0;

		this._statusWindow.x = 0;
		this._statusWindow.y = this._commandWindow.height;

		this._goldWindow.x = this._statusWindow.width;
		//this._goldWindow.y = this._statusWindow.y + this._statusWindow.height;
		this._goldWindow.y = this._commandWindow.height;

		this._commandWindow.opacity = opacity;
		this._statusWindow.opacity = opacity;
		this._goldWindow.opacity = opacity;
	};

	Window_MenuStatus.prototype.windowWidth = function() {
	    return Graphics.boxWidth;
	};

	Window_MenuStatus.prototype.windowHeight = function() {
	    return Graphics.boxHeight - this.fittingHeight(3);
	};

	Window_MenuStatus.prototype.numVisibleRows = function() {
	    return 2;//1;
	};

	Window_MenuStatus.prototype.maxCols = function() {
	    return 1;//4;
	};
/*
	Window_MenuStatus.prototype.drawItemStatus = function(index) {
	    var actor = $gameParty.members()[index];
	    var rect = this.itemRect(index);
	    var x = rect.x + 20;// + 162;
	    var y = rect.y + rect.height / 2 - this.lineHeight() * 1.5;
	    var width = rect.width - x - this.textPadding();
	    //this.drawActorSimpleStatus(actor, x, y, width);
	    var lineHeight = this.lineHeight();
	    //var x2 = x + 180;
	    var width2 = 150;//Math.min(200, width - 180 - this.textPadding());
	    this.drawActorName(actor, x, y);
	    this.drawActorLevel(actor, x, y + lineHeight * 1);
	    this.drawActorIcons(actor, x, y + lineHeight * 2);
	    this.drawActorClass(actor, x, y + lineHeight * 3);
	    this.drawActorHp(actor, x, y + lineHeight * 4, width2);
	    this.drawActorMp(actor, x, y + lineHeight * 5, width2);
	};
*/





	Window_MenuCommand.prototype.windowWidth = function() {
	    return Graphics.boxWidth;
	};

	Window_MenuCommand.prototype.windowHeight = function() {
	    return this.fittingHeight(this.numVisibleRows());
	};

	Window_MenuCommand.prototype.numVisibleRows = function() {
	    return 2;
	};

	Window_MenuCommand.prototype.maxCols = function() {
	    return 4;
	};
})();