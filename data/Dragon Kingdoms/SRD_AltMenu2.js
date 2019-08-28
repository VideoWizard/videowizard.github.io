var _Scene_Menu_createBackground = Scene_Menu.prototype.createBackground;
    Scene_Menu.prototype.createBackground = function() {
        if(background) {
            this._backgroundSprite = new Sprite();
            this._backgroundSprite.bitmap = ImageManager.loadPicture(background);
            this.addChild(this._backgroundSprite);
            this._isBackgroundScaled = false;
        } else {
            _Scene_Menu_createBackground.call(this);
        }
    };
 
    var _Scene_Menu_update = Scene_Menu.prototype.update;
    Scene_Menu.prototype.update = function() {
        _Scene_Menu_update.call(this);
        if(this._isBackgroundScaled == false && this._backgroundSprite.bitmap.width != 0) {
            this._isBackgroundScaled = true;
            this._backgroundSprite.scale.x = Number(Graphics.width / this._backgroundSprite.bitmap.width);
            this._backgroundSprite.scale.y = Number(Graphics.height / this._backgroundSprite.bitmap.height);
        }
    };
 
    var _Scene_Equip_createBackground = Scene_Equip.prototype.createBackground;
    Scene_Equip.prototype.createBackground = function() {
        if(background) {
            this._backgroundSprite = new Sprite();
            this._backgroundSprite.bitmap = ImageManager.loadPicture(background);
            this.addChild(this._backgroundSprite);
            this._isBackgroundScaled = false;
        } else {
            _Scene_Equip_createBackground.call(this);
        }
    };
 
    var _Scene_Equip_update = Scene_Equip.prototype.update;
    Scene_Equip.prototype.update = function() {
        _Scene_Equip_update.call(this);
        if(this._isBackgroundScaled == false && this._backgroundSprite.bitmap.width != 0) {
            this._isBackgroundScaled = true;
            this._backgroundSprite.scale.x = Number(Graphics.width / this._backgroundSprite.bitmap.width);
            this._backgroundSprite.scale.y = Number(Graphics.height / this._backgroundSprite.bitmap.height);
        }
    };
 
    var _Scene_Options_createBackground = Scene_Options.prototype.createBackground;
    Scene_Options.prototype.createBackground = function() {
        if(background) {
            this._backgroundSprite = new Sprite();
            this._backgroundSprite.bitmap = ImageManager.loadPicture(background);
            this.addChild(this._backgroundSprite);
            this._isBackgroundScaled = false;
        } else {
            _Scene_Options_createBackground.call(this);
        }
    };
 
    var _Scene_Options_update = Scene_Options.prototype.update;
    Scene_Options.prototype.update = function() {
        _Scene_Options_update.call(this);
        if(this._isBackgroundScaled == false && this._backgroundSprite.bitmap.width != 0) {
            this._isBackgroundScaled = true;
            this._backgroundSprite.scale.x = Number(Graphics.width / this._backgroundSprite.bitmap.width);
            this._backgroundSprite.scale.y = Number(Graphics.height / this._backgroundSprite.bitmap.height);
        }
    };
 
    var _Scene_Status_createBackground = Scene_Status.prototype.createBackground;
    Scene_Status.prototype.createBackground = function() {
        if(backgroundStatus) {
            this._backgroundSprite = new Sprite();
            this._backgroundSprite.bitmap = ImageManager.loadPicture(backgroundStatus);
            this.addChild(this._backgroundSprite);
            this._isBackgroundScaled = false;
        } else {
            _Scene_Status_createBackground.call(this);
        }
    };
 
    var _Scene_Status_update = Scene_Status.prototype.update;
    Scene_Status.prototype.update = function() {
        _Scene_Status_update.call(this);
        if(this._isBackgroundScaled == false && this._backgroundSprite.bitmap.width != 0) {
            this._isBackgroundScaled = true;
            this._backgroundSprite.scale.x = Number(Graphics.width / this._backgroundSprite.bitmap.width);
            this._backgroundSprite.scale.y = Number(Graphics.height / this._backgroundSprite.bitmap.height);
        }
    };
 
    var _Scene_GameEnd_createBackground = Scene_GameEnd.prototype.createBackground;
    Scene_GameEnd.prototype.createBackground = function() {
        if(background) {
            this._backgroundSprite = new Sprite();
            this._backgroundSprite.bitmap = ImageManager.loadPicture(background);
            this.addChild(this._backgroundSprite);
            this._isBackgroundScaled = false;
        } else {
            _Scene_GameEnd_createBackground.call(this);
        }
    };
 
    var _Scene_GameEnd_update = Scene_GameEnd.prototype.update;
    Scene_GameEnd.prototype.update = function() {
        _Scene_GameEnd_update.call(this);
        if(this._isBackgroundScaled == false && this._backgroundSprite.bitmap.width != 0) {
            this._isBackgroundScaled = true;
            this._backgroundSprite.scale.x = Number(Graphics.width / this._backgroundSprite.bitmap.width);
            this._backgroundSprite.scale.y = Number(Graphics.height / this._backgroundSprite.bitmap.height);
        }
    };
 
    var _Scene_ItemBase_createBackground = Scene_ItemBase.prototype.createBackground;
    Scene_ItemBase.prototype.createBackground = function() {
        if(background) {
            this._backgroundSprite = new Sprite();
            this._backgroundSprite.bitmap = ImageManager.loadPicture(background);
            this.addChild(this._backgroundSprite);
            this._isBackgroundScaled = false;
        } else {
            _Scene_ItemBase_createBackground.call(this);
        }
    };
 
    var _Scene_Save_update = Scene_Save.prototype.update;
    Scene_Save.prototype.update = function() {
        _Scene_Save_update.call(this);
        if(this._isBackgroundScaled == false && this._backgroundSprite.bitmap.width != 0) {
            this._isBackgroundScaled = true;
            this._backgroundSprite.scale.x = Number(Graphics.width / this._backgroundSprite.bitmap.width);
            this._backgroundSprite.scale.y = Number(Graphics.height / this._backgroundSprite.bitmap.height);
        }
    };
 
    var _Scene_Save_createBackground = Scene_Save.prototype.createBackground;
    Scene_Save.prototype.createBackground = function() {
        if(background) {
            this._backgroundSprite = new Sprite();
            this._backgroundSprite.bitmap = ImageManager.loadPicture(background);
            this.addChild(this._backgroundSprite);
            this._isBackgroundScaled = false;
        } else {
            _Scene_Save_createBackground.call(this);
        }
    };
 
    var _Scene_ItemBase_update = Scene_ItemBase.prototype.update;
    Scene_ItemBase.prototype.update = function() {
        _Scene_ItemBase_update.call(this);
        if(this._isBackgroundScaled == false && this._backgroundSprite.bitmap.width != 0) {
            this._isBackgroundScaled = true;
            this._backgroundSprite.scale.x = Number(Graphics.width / this._backgroundSprite.bitmap.width);
            this._backgroundSprite.scale.y = Number(Graphics.height / this._backgroundSprite.bitmap.height);
        }
    };