(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.비트맵8 = function() {
	this.initialize(img.비트맵8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,881,551);


(lib.일시정지 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,0,1,true).p("Ag0jqIBpAAIAAHVIhpAAg");
	this.shape.setTransform(56.7,47.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgzDrIAAnVIBnAAIAAHVg");
	this.shape_1.setTransform(56.7,47.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,0,1,true).p("Ag0jqIBpAAIAAHVIhpAAg");
	this.shape_2.setTransform(34.2,47.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgzDrIAAnVIBnAAIAAHVg");
	this.shape_3.setTransform(34.2,47.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(11,1,1).p("AHWAAQAADDiKCJQiJCKjDAAQjCAAiKiKQiJiJAAjDQAAjCCJiKQCKiJDCAAQDDAACJCJQCKCKAADCg");
	this.shape_4.setTransform(47,47);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlLFMQiKiJAAjDQAAjBCKiKQCKiKDBAAQDDAACJCKQCKCKAADBQAADDiKCJQiJCKjDAAQjBAAiKiKg");
	this.shape_5.setTransform(47,47);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(11,1,1).p("AHWAAQAADDiKCJQiJCKjDAAQjCAAiKiKQiJiJAAjDQAAjCCJiKQCKiJDCAAQDDAACJCJQCKCKAADCg");
	this.shape_6.setTransform(47,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-5.5,105,105);


(lib.노래듣기_미선택 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA3BdIAAi5IAeAAIAAC5gAhUAYQAmgBATgYQASgXAAgpIhIAAIAAgbIBlAAIAAAVQAABFgkAfQgaAWgqACg");
	this.shape.setTransform(112.35,30.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhFBbQgIAAgEgDQgDgEAAgJIAAg1ICpAAIAAAbIiLAAIAAAQICLAAIAAAagAhbAKIAAgZIC3AAIAAAZgAAOgbIhTAAQgIAAgEgDQgDgEAAgJIAAgvICpAAIAAAaIiLAAIAAAMICLAAIAAAZg");
	this.shape_1.setTransform(90.35,30.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA4BcIAAhjIgNAAIAABjIgcAAIAAgpIACAAIAAgaIgCAAIAAh0IAcAAIAAA5IANAAIAAg5IAdAAIAAC3gAAPAzIAAgaIACAAIAAAagAhGAzQgHAAgEgDQgDgEAAgJIAAhGIA5AAIAAgdIg5AAIAAgbIBXAAIAABSIg5AAIAAAiIBFAAIAAAagAAPAZg");
	this.shape_2.setTransform(61,30.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhaBXIAAgbIBMAAIAAgyIgyAAQgIAAgEgDQgDgEAAgIIAAhRIAeAAIAABGICBAAIAAAaIhBAAIAAgCIgdAAIAAACIAdAAIgdAAIAAgCIAdAAIAAACIAAAyIBMAAIAAAbg");
	this.shape_3.setTransform(39,30.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("Ar1EjIAAmyQAAiTCTAAITFAAQCTAAAACTIAAGyg");
	this.shape_4.setTransform(75.8,29.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.6,58.1);


(lib.노래부르기_미선택 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA3BdIAAi5IAeAAIAAC5gAhUAYQAmgBATgYQASgXAAgpIhIAAIAAgbIBlAAIAAAVQAABFgkAfQgaAWgqACg");
	this.shape.setTransform(112.35,30.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhFBbQgIAAgEgDQgDgEAAgJIAAg1ICpAAIAAAbIiLAAIAAAQICLAAIAAAagAhbAKIAAgZIC3AAIAAAZgAAOgbIhTAAQgIAAgEgDQgDgEAAgJIAAgvICpAAIAAAaIiLAAIAAAMICLAAIAAAZg");
	this.shape_1.setTransform(90.35,30.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBcIAAg6IhNAAIAAgbIC2AAIAAAbIhMAAIAAA6gAAlgPQgcgHgJgNQgIANgdAHQgVAEgaABIAAgbQAdAAARgHQATgHABgOIhCAAIAAgaICpAAIAAAaIhCAAQAAANAUAIQARAGAdABIAAAbQgbgBgVgEg");
	this.shape_2.setTransform(61,30.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhHBbQgIAAgDgDQgEgEAAgJIAAgyIAeAAIAAAnICCAAIAAAbgAArAiIAAh8IAeAAIAAAlIAYAAIAAAbIgYAAIAAA8gAhSAGQgHAAgEgEQgDgCAAgJIAAhRIAeAAIAAAVIAwAAIAAgVIAdAAIAABRQAAAJgEACQgEAEgGAAgAhCgUIAwAAIAAgXIgwAAg");
	this.shape_3.setTransform(40.225,30.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("Ar1EjIAAmyQAAiTCTAAITFAAQCTAAAACTIAAGyg");
	this.shape_4.setTransform(75.8,29.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.6,58.1);


(lib._8분음표높은음 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1.5,1,1).p("ABRgUQABABAAAAQAAAEABAEQAAABAAABQAAAFgBAEQgDAMgLAMQgTAXgiAJQgCAAgCABQgfAIgagKQgcgKgGgXQgCgGAAgGQABgQAOgRQAFgHAHgFQAKgHAMgGQAGgDAHgCQADgBADgBQAEgBADAAQAdgHAZAJQAFACAMAHQAKAGAGAP");
	this.shape.setTransform(8.275,7.1415);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AguA3QgcgKgGgXIgCgMQABgQAOgRQAFgHAHgFQAKgHAMgGIANgFIAGgCIAHgBQAdgHAZAJIARAJQAKAGAGAPIABADIAAABIABABIABAIIAAACIgBAJQgDAMgLAMQgTAXgiAJIgEABQgNADgNAAQgRAAgOgFg");
	this.shape_1.setTransform(8.275,7.1415);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(1.5,1,1).p("Ag/hMIAAhhQAZAoAqAnQArAmAOA3QAOA1gxBYQA8h7hbhJQgVgQglgEgAg/CuIAAj6");
	this.shape_2.setTransform(6.997,28.275,1,1,0,180,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgFgnQgVgQglgEIAAhhQAZAoAqAnQArAnAOA1QAOA2gxBYQA8h7hbhJg");
	this.shape_3.setTransform(6.997,30,1,1,0,180,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAAAAIAAAAIABABIgBgBg");
	this.shape_4.setTransform(16.325,3.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0.2,18.6,46.5);


(lib._8분음표 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1.5,1,1).p("AAQh3IAAhhQAYAoArAnQAsAnANA2QAOA1gwBYQA7h6hchKQgVgQgkgEIAAD6QACgCACAEQAAABABABQABAFAAAEQAAACAAABQAAAEgBAEQgDANgLANQgSAWgiAJQgCABgCAAQgfAIgbgKQgcgJgGgXQgBgHAAgGQAAgRAOgRQAGgGAGgFQAKgIAMgFQAGgDAHgCQADgBADgBQAEgBAEgBQAdgGAZAJQAGACALAHQALAHgEAT");
	this.shape.setTransform(14.3379,21.7028);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhrDTQgcgJgGgXIgBgNQAAgRAOgRQAGgGAGgFQAKgIAMgFIANgFIAGgCIAIgCQAdgGAZAJIARAJQALAHgEATIABgCIABgCIACgCIABAAQAAAAABAAQABgBAAABQABAAAAAAQABABAAABIABACIABAJIAAADIgBAIQgDANgLANQgSAWgiAJIgEABQgOAEgNAAQgQAAgPgGgABJhjQgVgQgkgEIAAhhQAYAoArAnQAsAnANA2QAOA1gwBYQA7h6hchKg");
	this.shape_1.setTransform(14.3379,21.7028);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,30.7,45.4);


(lib._4분음표높은음 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1.5,1,1).p("AAACgIAAk1IAAgK");
	this.shape.setTransform(1.8,25.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AguA3QgKgDgIgGIAAgKIAAAKQgMgJgEgOIgCgKIAAgDQABgQAOgRQAFgGAHgFQAKgIAMgFIANgFIAGgCIAHgCQAdgGAPAFQAQAFALAIQALAIABADIACADIACAIIADALIAAADIAAACIgBAGQgDAMgLANQgTAWgiAJIgEABQgNAEgNAAQgRAAgOgGg");
	this.shape_1.setTransform(8.275,6.0482);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.6,42.7);


(lib._4분음표 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1.5,1,1).p("AAACmIAAgHIAAlE");
	this.shape.setTransform(15.85,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AguA3QgcgKgGgXIgCgMQABgQAOgRQAFgHAHgFQAKgHAMgGIANgFIAGgCIAHgBQAdgHAZAJQAFACAMAHQAMAHgFATIACgBIABgCIACgCIAAAHIAAgHQADgDACAEIAAADIACAJIAAACIgBAJQgDAMgLAMQgTAXgiAJIgEABQgNADgNAAQgRAAgOgFgABMgYg");
	this.shape_1.setTransform(8.275,35.5415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,16.9,42.1);


(lib.따라부르기미선택 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA3BdIAAi5IAeAAIAAC5gAhUAYQAmgBATgYQASgXAAgpIhIAAIAAgbIBlAAIAAAVQAABFgkAfQgaAWgqACg");
	this.shape.setTransform(123.35,30.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhbBXIAAgbIC3AAIAAAbgAhBAdQgHAAgEgEQgDgDAAgJIAAg3ICAAAIAAgRIiAAAIAAgbICeAAIAABGIiAAAIAAASICAAAIAAAbg");
	this.shape_1.setTransform(101.35,30.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPBcIAAg6IhMAAIAAgbIC2AAIAAAbIhMAAIAAA6gAhGgIQgHAAgEgEQgDgEAAgJIAAhCIAeAAIAAAQIBtAAIAAgQIAeAAIAABCQAAAJgEAEQgDAEgHAAgAg2gjIBtAAIAAgPIhtAAg");
	this.shape_2.setTransform(79.35,30.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AArBcIAAgpIAGAAIAAgaIgGAAIAAh0IAeAAIAAA/IAYAAIAAAbIgYAAIAABdgAArAzIAAgaIAGAAIAAAagAhSAzQgHAAgEgDQgDgEAAgJIAAhGIBMAAIAAgdIhMAAIAAgbIBpAAIAABSIhLAAIAAAiIBtAAIAAAagAArAZg");
	this.shape_3.setTransform(51.225,30.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAtBcIAAgmIg7AAQgHAAgEgDQgDgEAAgIIAAiCIAzAAIAAAbIgXAAIAABcIAtAAIAAh3IAeAAIAAA/IAYAAIAAAbIgYAAIAABdgAAxA2IAAgaIgEAAIAEAAIAAAaIgEAAIAAgaIAAAaIAEAAgAhUA2QgHAAgDgDQgEgEAAgIIAAiCIA/AAIAAAbIgiAAIAABcIAiAAIAAAag");
	this.shape_4.setTransform(29.05,30.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("Ar1EjIAAmyQAAiTCTAAITFAAQCTAAAACTIAAGyg");
	this.shape_5.setTransform(75.8,29.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.6,58.1);


(lib.정지 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,0,1,true).p("AjUjgIGpAAIAAHBImpAAg");
	this.shape.setTransform(46.15,47.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AjTDhIAAnBIGoAAIAAHBg");
	this.shape_1.setTransform(46.15,47.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(11,1,1).p("AHWAAQAADDiKCJQiJCKjDAAQjCAAiKiKQiJiJAAjDQAAjCCJiKQCKiJDCAAQDDAACJCJQCKCKAADCg");
	this.shape_2.setTransform(47,47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlLFMQiKiJAAjDQAAjBCKiKQCKiKDBAAQDDAACJCKQCKCKAADBQAADDiKCJQiJCKjDAAQjBAAiKiKg");
	this.shape_3.setTransform(47,47);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(11,1,1).p("AHWAAQAADDiKCJQiJCKjDAAQjCAAiKiKQiJiJAAjDQAAjCCJiKQCKiJDCAAQDDAACJCJQCKCKAADCg");
	this.shape_4.setTransform(47,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_4},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-5.5,105,105);


(lib.플레이 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(11,1,1).p("AHWAAQAADDiKCJQiJCKjDAAQjCAAiKiKQiJiJAAjDQAAjCCJiKQCKiJDCAAQDDAACJCJQCKCKAADCg");
	this.shape.setTransform(47,47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ai3klIFvEbIlvEwg");
	this.shape_1.setTransform(53.15,45.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlLFMQiKiJAAjDQAAjBCKiKQCKiKDBAAQDDAACJCKQCKCKAADBQAADDiKCJQiJCKjDAAQjBAAiKiKgAh6EZIFvkxIlvkag");
	this.shape_2.setTransform(47,47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(11,1,1).p("AHWAAQAADDiKCJQiJCKjDAAQjCAAiKiKQiJiJAAjDQAAjCCJiKQCKiJDCAAQDDAACJCJQCKCKAADCg");
	this.shape_3.setTransform(47,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-5.5,105,105);


(lib.전문가_미선택 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAyBUIAAinIAbAAIAACngAhNAWQAjgBASgWQAPgVABglIhCAAIAAgYIBdAAIAAATQgBA+ggAcQgYAVgnACg");
	this.shape.setTransform(127.2,30.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BTQgHAAgDgDQgDgDgBgJIAAgvICaAAIAAAXIh+AAIAAAPIB+AAIAAAYgAhSAJIAAgWIClAAIAAAWgAANgYIhMAAQgHAAgDgDQgDgEgBgIIAAgrICaAAIAAAYIh+AAIAAAKIB+AAIAAAYg");
	this.shape_1.setTransform(107.2,30.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBOQgRgPAAgXQAAgXARgPQAKgHAMgEIgFgCQgOgIgHgLQgHALgPAIQgOAHgOABIAAgZQAPgDAIgHQAHgGADgJIggAAIAAgYIAjAAIAAgOIAcAAIAAAOIAjAAIAAAYIghAAQADAJAIAGQAJAHANADIAAASQARABAOALQASAPAAAXQAAAXgSAPQgQAOgWAAQgWAAgQgOgAgOAVQgJAHAAAMQAAAMAJAHQAIAIAKgBQALABAIgIQAJgHAAgMQAAgMgJgHQgIgIgLABQgKgBgIAIgAALgDIAAgHIgHgBQgIAAgIACQALAFAMABIAAAAgAAngDIAAhPIAcAAIAAAbIAWAAIAAAZIgWAAIAAAbgAALgDQgMgBgLgFQAIgCAIAAIAHABIAAAHIAAAAgAgMgJIAAAAg");
	this.shape_2.setTransform(88.275,30.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnBTIAAilIAcAAIAAA5IAVAAIAAAYIgVAAIAABUgAhXAXQAigBARgWQARgVgBglIhBAAIAAgYIBcAAIAAATQABA+ghAcQgZAVglACg");
	this.shape_3.setTransform(61.65,30.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/BTQgHAAgDgDQgEgDAAgJIAAgqIAcAAIAAAhIB/AAIAAAYgAgKApIAAgaIhIAAIAAgXIClAAIAAAXIhDAAIAAAagAg/gUQgHAAgDgCQgEgEAAgIIAAgwICbAAIAAAwQAAAJgEADQgDACgHAAgAgygpIBlAAIAAgTIhlAAg");
	this.shape_4.setTransform(40.55,30.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1BTQgHAAgDgDQgEgDAAgJIAAguIAcAAIAAAlIB2AAIAAAYgAAyAfIAAg7IgYAAIAAgXIAYAAIAAgfIAcAAIAABxgAgGgBQgOgIgHgNQgIANgPAIQgOAHgOABIAAgZQASgCAJgMQAHgJACgRIgjAAIAAgYIBiAAIAAAYIgiAAQACARAHAJQAIAMASACIAAAZQgQgBgMgHg");
	this.shape_5.setTransform(20.525,30.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("Ar1EjIAAmyQAAiTCTAAITFAAQCTAAAACTIAAGyg");
	this.shape_6.setTransform(75.8,29.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.6,58.1);


// stage content:
(lib.노래익히기프로토2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"1절":172,"2절":387,"1절":791,"2절":1006,"1절":1518,"1절":2453,"2절":2668,예비박:1,전주:63,"예비박":620,"전주":682,"예비박":1240,"전주":1305,"1절노래":1411,"1절노래":1518,"1절2소절":1626,"2절노":1841,"2절부르기":1948,"2절2소절":2056,"예비박":2295,"전주":2346,노래듣기:0,전문가창:619,따라부르:1239,반주듣기:2294};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,618,619,1238,1239,2293,2294,2912];
	this.streamSoundSymbolsList[0] = [{id:"y2matecom1어깨동무노래듣기",startFrame:0,endFrame:619,loop:1,offset:0}];
	this.streamSoundSymbolsList[619] = [{id:"y2matecom1어깨동무노래듣기",startFrame:619,endFrame:1239,loop:1,offset:0}];
	this.streamSoundSymbolsList[1239] = [{id:"어깨동무따라부르기_",startFrame:1239,endFrame:2294,loop:1,offset:0}];
	this.streamSoundSymbolsList[2294] = [{id:"어깨동무노래부르기반주_",startFrame:2294,endFrame:2913,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("y2matecom1어깨동무노래듣기",0);
		this.InsertIntoSoundStreamData(soundInstance,0,619,1);
		this.stop();
		
		var _this = this;
		
		/*메뉴 네비게이션*/
		
		_this.listen_btn.on('click', function () {
		
			_this.gotoAndStop('노래듣기');
		});
		
		_this.expert_btn.on('click', function () {
		
			_this.gotoAndStop('전문가창');
		});
		
		_this.singAlong_btn.on('click', function () {
		
			_this.gotoAndStop('따라부르');
		});
		
		_this.sing_btn.on('click', function () {
		
			_this.gotoAndStop('반주듣기');
		});
		
		
		/*플레이컨트롤*/
		
		_this.play_btn.on('click', function () {
		
			_this.play();
		
		});
		
		_this.pause_btn.on('click', function () {
		
			_this.stop();
		});
		
		_this.stop1_btn.on('click', function () {
		
			_this.gotoAndStop('노래듣기');
			
		});
		
		_this.stop2_btn.on('click', function () {
		
			_this.gotoAndStop('전문가창');
		});
		
		_this.stop3_btn.on('click', function () {
		
			_this.gotoAndStop('따라부르');
		});
		
		_this.stop4_btn.on('click', function(){
		
			_this.gotoAndStop('반주듣기');
		});
	}
	this.frame_618 = function() {
		this.gotoAndStop('노래듣기');
	}
	this.frame_619 = function() {
		var soundInstance = playSound("y2matecom1어깨동무노래듣기",0);
		this.InsertIntoSoundStreamData(soundInstance,619,1239,1);
		this.stop();
	}
	this.frame_1238 = function() {
		this.gotoAndStop('전문가창');
	}
	this.frame_1239 = function() {
		var soundInstance = playSound("어깨동무따라부르기_",0);
		this.InsertIntoSoundStreamData(soundInstance,1239,2294,1);
		this.stop();
	}
	this.frame_2293 = function() {
		var _this = this;
		_this.gotoAndStop('따라부르');
	}
	this.frame_2294 = function() {
		var soundInstance = playSound("어깨동무노래부르기반주_",0);
		this.InsertIntoSoundStreamData(soundInstance,2294,2913,1);
		this.stop();
	}
	this.frame_2912 = function() {
		this.gotoAndStop('반주듣기');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(618).call(this.frame_618).wait(1).call(this.frame_619).wait(619).call(this.frame_1238).wait(1).call(this.frame_1239).wait(1054).call(this.frame_2293).wait(1).call(this.frame_2294).wait(618).call(this.frame_2912).wait(1));

	// 절표시
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC00").ss(4,1,1).p("Eg6HgCPMB0OAAAIAAEeMh0OAAAg");
	this.shape.setTransform(654.8467,394.75,1.0485,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg+4ACqIAAlTMB9xAAAIAAFTg");
	this.shape_1.setTransform(658.975,636.996,1,1.2279);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Eg+4ACqIAAlTMB9xAAAIAAFTg");
	this.shape_2.setTransform(667.225,435.496,1,1.2279);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2,p:{x:667.225,y:435.496}},{t:this.shape_1,p:{y:636.996}},{t:this.shape,p:{x:654.8467,y:394.75}}]},172).to({state:[{t:this.shape_2,p:{x:667.225,y:435.496}},{t:this.shape_1,p:{y:636.996}},{t:this.shape,p:{x:655.9467,y:596.05}}]},107).to({state:[{t:this.shape_2,p:{x:668.425,y:391.496}},{t:this.shape_1,p:{y:592.996}},{t:this.shape,p:{x:653.4967,y:434.1}}]},108).to({state:[{t:this.shape_2,p:{x:668.425,y:391.496}},{t:this.shape_1,p:{y:592.996}},{t:this.shape,p:{x:656.9467,y:634.05}}]},106).to({state:[]},126).to({state:[{t:this.shape_2,p:{x:667.225,y:435.496}},{t:this.shape_1,p:{y:636.996}},{t:this.shape,p:{x:654.8467,y:394.75}}]},172).to({state:[{t:this.shape_2,p:{x:667.225,y:435.496}},{t:this.shape_1,p:{y:636.996}},{t:this.shape,p:{x:655.9467,y:596.05}}]},107).to({state:[{t:this.shape_2,p:{x:668.425,y:391.496}},{t:this.shape_1,p:{y:592.996}},{t:this.shape,p:{x:653.4967,y:434.1}}]},108).to({state:[{t:this.shape_2,p:{x:668.425,y:391.496}},{t:this.shape_1,p:{y:592.996}},{t:this.shape,p:{x:656.9467,y:634.05}}]},106).to({state:[]},127).to({state:[{t:this.shape_2,p:{x:667.225,y:435.496}},{t:this.shape_1,p:{y:636.996}},{t:this.shape,p:{x:654.8467,y:394.75}}]},279).to({state:[{t:this.shape_2,p:{x:667.225,y:435.496}},{t:this.shape_1,p:{y:636.996}}]},108).to({state:[{t:this.shape_2,p:{x:667.225,y:435.496}},{t:this.shape_1,p:{y:636.996}},{t:this.shape,p:{x:655.9467,y:596.05}}]},108).to({state:[{t:this.shape_2,p:{x:667.225,y:395.846}},{t:this.shape_1,p:{y:589.646}}]},107).to({state:[{t:this.shape_2,p:{x:667.225,y:395.846}},{t:this.shape_1,p:{y:589.646}},{t:this.shape,p:{x:655.9467,y:434.85}}]},107).to({state:[{t:this.shape_2,p:{x:667.225,y:395.846}},{t:this.shape_1,p:{y:589.646}}]},108).to({state:[{t:this.shape_2,p:{x:667.225,y:391.146}},{t:this.shape_1,p:{y:592.646}},{t:this.shape,p:{x:656.2967,y:634.05}}]},108).to({state:[]},111).to({state:[{t:this.shape_2,p:{x:667.225,y:435.496}},{t:this.shape_1,p:{y:636.996}},{t:this.shape,p:{x:654.8467,y:394.75}}]},178).to({state:[{t:this.shape_2,p:{x:667.225,y:435.496}},{t:this.shape_1,p:{y:636.996}},{t:this.shape,p:{x:655.9467,y:596.05}}]},107).to({state:[{t:this.shape_2,p:{x:668.425,y:391.496}},{t:this.shape_1,p:{y:592.996}},{t:this.shape,p:{x:653.4967,y:434.1}}]},108).to({state:[{t:this.shape_2,p:{x:668.425,y:391.496}},{t:this.shape_1,p:{y:592.996}},{t:this.shape,p:{x:656.9467,y:634.05}}]},107).wait(138));

	// 싱크
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AA3F0IAAh9Ik5AAIAAhxIE/n5IB+AAIAAHuIBIAAIAAB8IhIAAIAAB9gAhxB7ICoAAIAAkQg");
	this.shape_3.setTransform(653.8,449.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AiyE9QhEhHAAh9ICCAAQAABCAfAjQAdAjA0AAQAyAAAjgjQAhgiAAg1QAAg8gigeQgkgghCAAIgPAAIgaADIAAiGIAZADIAMABQAwAAAWgRQAXgSAAgmQAAghgTgTQgSgSgdAAQgjAAgQATQgSAVgBAvIiAAAQADhlA5g6QA3g4BWAAQBQAAA5A6QA5A5AABNQAAAngOAgQgOAggbAbQAyAeAaAwQAcAyAABBQAABphIBLQhIBMhmAAQhxAAhChFg");
	this.shape_4.setTransform(662.475,449.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AjxF6IAAh2ID9j3IAGgHQAxgxAQgWQAZgkABgmQgBgxgfgfQgegfgyAAQg1AAgcAfQgcAgAAA+IAAAdIiBAAIAAgUQAAh1BFhIQBFhJBtAAQBhAABGBHQBFBHAABgQAAA4gbA1QgaAvg1A0Ii/C3IEoAAIAAB/g");
	this.shape_5.setTransform(663.6,448.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgGFzIAApwIh8AAIAAh1IEFAAIAALlg");
	this.shape_6.setTransform(658.025,449.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ah4FwQhXhMAAhyQAAhyBXhKQAUgSAXgOIjzAAQghAAgQgOQgQgSAAgpIAAlEIHJAAIAAB6Ik/AAIAACaIE/AAIAABRQBtAABSBIQBaBKAAByQAAByhaBMQhRBIhuAAQhvAAhRhIgAgXBSQgrAnAAA5QAAA5ArAnQApAmA3AAQA3AAApgmQArgnAAg5QAAg5grgnQgpgkg3gBQg3ABgpAkgABIgqIAAgoQhTAAhCAoICVAAgAD5gqIAAiNIiBAAIAAhzICBAAIAAiNICKAAIAAGNgABIgqIiVAAQBCgoBTAAIAAAogAhNgqg");
	this.shape_7.setTransform(663.5,453.3);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("Ai9F+QhShDAAhnQAAhnBShEQAzgoA9gNIAAA8ICLAAIAAg8QA8ANAyAoQBTBFAABmQAABmhTBEQhNA/hkAAQhqAAhOg/gAhgB/QgmAiAAAzQAAAyAmAiQAlAhAzAAQAwAAAlghQAngiAAgyQAAgzgngiQglgggwAAQgzAAglAggAA+AwIiLAAIAAg8QAigIAmAAQAjAAAgAIIAAA8gAhNgMgAhNgdIlXAAIAAh6IKYAAIAAApICIAAIAAgpIApAAIAAB6IlnAAIAAARQgggIgjAAQgmAAgiAIgAA+gMIAAAAgAD0huIAAgpICIAAIAAApgAF8iXIiIAAIAAgvIp8AAIAAhfIJ8AAIAAguIp8AAIAAhpIMEAAIAAElgAD0iXg");
	this.shape_8.setTransform(664.125,453.825);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AD5GhIAAjqIpNAAIAAh7ILXAAIAAFlgAD5AHIAAicIiBAAIAAh8ICBAAIAAiPICKAAIAAGngAlAgOQghAAgQgPQgQgSAAgpIAAlIIHJAAIAAB6Ik/AAIAACdIE/AAIAAB7g");
	this.shape_9.setTransform(663.5,451);
	this.shape_9._off = true;

	this.instance = new lib._4분음표();
	this.instance.setTransform(305.8,294.65);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib._8분음표();
	this.instance_1.setTransform(367.4,292.8);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib._8분음표높은음();
	this.instance_2.setTransform(687.9,312.65);
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.instance_3 = new lib._4분음표높은음();
	this.instance_3.setTransform(718.05,313.9);
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AA2F0IAAh9Ik4AAIAAhxIE/n5IB+AAIAAHuIBIAAIAAB8IhIAAIAAB9gAhwB7ICmAAIAAkQg");
	this.shape_10.setTransform(655.35,449.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},15).to({state:[{t:this.shape_5}]},15).to({state:[{t:this.shape_6}]},16).to({state:[{t:this.shape_7}]},16).to({state:[{t:this.shape_8}]},15).to({state:[]},13).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},8).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_7}]},16).to({state:[{t:this.shape_8}]},13).to({state:[]},12).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},13).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},10).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},8).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},12).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},10).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},8).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},12).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},12).to({state:[]},14).to({state:[{t:this.shape_10}]},4).to({state:[{t:this.shape_4}]},15).to({state:[{t:this.shape_5}]},15).to({state:[{t:this.shape_6}]},16).to({state:[{t:this.shape_7}]},16).to({state:[{t:this.shape_8}]},15).to({state:[]},13).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},8).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_7}]},16).to({state:[{t:this.shape_8}]},13).to({state:[]},12).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},13).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},10).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},8).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},12).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},10).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},8).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},12).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},12).to({state:[]},14).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_4}]},15).to({state:[{t:this.shape_5}]},15).to({state:[{t:this.shape_6}]},16).to({state:[{t:this.shape_7}]},19).to({state:[{t:this.shape_8}]},14).to({state:[]},11).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},8).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_7}]},17).to({state:[{t:this.shape_8}]},14).to({state:[]},10).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},13).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},10).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},8).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},10).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},8).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},12).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},12).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},10).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},8).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},10).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},8).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},12).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},12).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},16).to({state:[{t:this.shape_10}]},20).to({state:[{t:this.shape_4}]},12).to({state:[{t:this.shape_5}]},13).to({state:[{t:this.shape_6}]},13).to({state:[{t:this.shape_7}]},13).to({state:[{t:this.shape_8}]},15).to({state:[]},13).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},8).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_7}]},16).to({state:[{t:this.shape_8}]},13).to({state:[]},12).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},13).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},10).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},8).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},12).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},10).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},8).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[]},12).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},12).to({state:[]},14).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(63).to({_off:false},0).to({_off:true},15).wait(41).to({_off:false},0).to({_off:true},13).wait(550).to({_off:false},0).to({_off:true},15).wait(41).to({_off:false},0).to({_off:true},13).wait(554).to({_off:false},0).to({_off:true},14).wait(40).to({_off:false},0).to({_off:true},14).wait(973).to({_off:false},0).to({_off:true},15).wait(41).to({_off:false},0).to({_off:true},13).wait(498));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(78).to({_off:false},0).to({_off:true},13).wait(1).to({_off:false},0).to({_off:true},8).wait(3).to({_off:false},0).to({_off:true},16).wait(13).to({_off:false},0).to({_off:true},12).wait(1).to({_off:false},0).to({_off:true},13).wait(539).to({_off:false},0).to({_off:true},13).wait(1).to({_off:false},0).to({_off:true},8).wait(3).to({_off:false},0).to({_off:true},16).wait(13).to({_off:false},0).to({_off:true},12).wait(1).to({_off:false},0).to({_off:true},13).wait(542).to({_off:false},0).to({_off:true},11).wait(1).to({_off:false},0).to({_off:true},8).wait(3).to({_off:false},0).to({_off:true},17).wait(14).to({_off:false},0).to({_off:true},10).wait(1).to({_off:false},0).to({_off:true},13).wait(964).to({_off:false},0).to({_off:true},13).wait(1).to({_off:false},0).to({_off:true},8).wait(3).to({_off:false},0).to({_off:true},16).wait(13).to({_off:false},0).to({_off:true},12).wait(1).to({_off:false},0).to({_off:true},13).wait(472));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(100).to({_off:false},0).to({_off:true},3).wait(55).to({_off:false},0).to({_off:true},14).wait(547).to({_off:false},0).to({_off:true},3).wait(55).to({_off:false},0).to({_off:true},14).wait(548).to({_off:false},0).to({_off:true},3).wait(55).to({_off:false},0).to({_off:true},14).wait(972).to({_off:false},0).to({_off:true},3).wait(55).to({_off:false},0).to({_off:true},12).wait(460));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(172).to({_off:false},0).to({_off:true},8).wait(4).to({_off:false,x:398.2},0).to({_off:true},8).wait(4).to({_off:false,x:489.8,y:294.2},0).to({_off:true},9).wait(8).to({_off:false,x:612.55,y:310.15},0).to({_off:true},10).wait(16).to({_off:false,x:778.85,y:294.2},0).to({_off:true},9).wait(4).to({_off:false,regX:8.3,regY:20.7,x:878.85,y:314.9,mode:"synched",startPosition:0},0).to({_off:true},9).wait(8).to({_off:false,x:1003.55,y:330.85},0).to({_off:true},8).wait(2).to({_off:false,regX:0,regY:0,x:275.5,y:493.75,mode:"independent"},0).to({_off:true},9).wait(4).to({_off:false,x:370.5},0).to({_off:true},8).wait(4).to({_off:false,x:466.3},0).to({_off:true},8).wait(8).to({_off:false,x:593.85,y:509.25},0).to({_off:true},12).wait(15).to({_off:false,x:767.3,y:493.75},0).to({_off:true},8).wait(4).to({_off:false,regX:8.3,regY:20.7,x:871.7,y:514.45,mode:"synched",startPosition:0},0).to({_off:true},8).wait(8).to({_off:false,x:999.8,y:529.95},0).wait(12).to({regX:0,regY:0,x:305.8,y:294.65,mode:"independent"},0).to({_off:true},8).wait(4).to({_off:false,x:398.2},0).to({_off:true},8).wait(4).to({_off:false,x:489.8,y:294.2},0).to({_off:true},9).wait(8).to({_off:false,x:612.55,y:310.15},0).to({_off:true},10).wait(16).to({_off:false,x:778.85,y:294.2},0).to({_off:true},9).wait(4).to({_off:false,regX:8.3,regY:20.7,x:878.85,y:314.9,mode:"synched",startPosition:0},0).to({_off:true},9).wait(8).to({_off:false,x:1003.55,y:330.85},0).to({_off:true},8).wait(2).to({_off:false,regX:0,regY:0,x:275.5,y:493.75,mode:"independent"},0).to({_off:true},9).wait(4).to({_off:false,x:370.5},0).to({_off:true},8).wait(4).to({_off:false,x:466.3},0).to({_off:true},8).wait(8).to({_off:false,x:593.85,y:509.25},0).to({_off:true},12).wait(15).to({_off:false,x:767.3,y:493.75},0).to({_off:true},8).wait(4).to({_off:false,regX:8.3,regY:20.7,x:871.7,y:514.45,mode:"synched",startPosition:0},0).to({_off:true},8).wait(8).to({_off:false,x:999.8,y:529.95},0).wait(12).to({startPosition:0},0).to({_off:true},14).wait(175).to({_off:false,regX:0,regY:0,x:305.8,y:294.65,mode:"independent"},0).to({_off:true},8).wait(4).to({_off:false,x:398.2},0).to({_off:true},8).wait(4).to({_off:false,x:489.8,y:294.2},0).to({_off:true},9).wait(8).to({_off:false,x:612.55,y:310.15},0).to({_off:true},10).wait(16).to({_off:false,x:778.85,y:294.2},0).to({_off:true},9).wait(4).to({_off:false,regX:8.3,regY:20.7,x:878.85,y:314.9,mode:"synched",startPosition:0},0).to({_off:true},9).wait(8).to({_off:false,x:1003.55,y:330.85},0).to({_off:true},8).wait(2).to({_off:false,regX:0,regY:0,x:275.5,y:493.75,mode:"independent"},0).to({_off:true},9).wait(4).to({_off:false,x:370.5},0).to({_off:true},8).wait(4).to({_off:false,x:466.3},0).to({_off:true},8).wait(8).to({_off:false,x:593.85,y:509.25},0).to({_off:true},12).wait(15).to({_off:false,x:767.3,y:493.75},0).to({_off:true},8).wait(4).to({_off:false,regX:8.3,regY:20.7,x:871.7,y:514.45,mode:"synched",startPosition:0},0).to({_off:true},8).wait(8).to({_off:false,x:999.8,y:529.95},0).wait(12).to({regX:0,regY:0,x:305.8,y:294.65,mode:"independent"},0).to({_off:true},8).wait(4).to({_off:false,x:398.2},0).to({_off:true},8).wait(4).to({_off:false,x:489.8,y:294.2},0).to({_off:true},9).wait(8).to({_off:false,x:612.55,y:310.15},0).to({_off:true},10).wait(16).to({_off:false,x:778.85,y:294.2},0).to({_off:true},9).wait(4).to({_off:false,regX:8.3,regY:20.7,x:878.85,y:314.9,mode:"synched",startPosition:0},0).to({_off:true},9).wait(8).to({_off:false,x:1003.55,y:330.85},0).to({_off:true},8).wait(2).to({_off:false,regX:0,regY:0,x:275.5,y:493.75,mode:"independent"},0).to({_off:true},9).wait(4).to({_off:false,x:370.5},0).to({_off:true},8).wait(4).to({_off:false,x:466.3},0).to({_off:true},8).wait(8).to({_off:false,x:593.85,y:509.25},0).to({_off:true},12).wait(15).to({_off:false,x:767.3,y:493.75},0).to({_off:true},8).wait(4).to({_off:false,regX:8.3,regY:20.7,x:871.7,y:514.45,mode:"synched",startPosition:0},0).to({_off:true},8).wait(8).to({_off:false,x:999.8,y:529.95},0).wait(12).to({startPosition:0},0).to({_off:true},14).wait(176).to({_off:false,regX:0,regY:0,x:305.8,y:294.65,mode:"independent"},0).to({_off:true},8).wait(4).to({_off:false,x:398.2},0).to({_off:true},8).wait(4).to({_off:false,x:489.8,y:294.2},0).to({_off:true},9).wait(8).to({_off:false,x:612.55,y:310.15},0).to({_off:true},10).wait(16).to({_off:false,x:778.85,y:294.2},0).to({_off:true},9).wait(4).to({_off:false,regX:8.3,regY:20.7,x:878.85,y:314.9,mode:"synched",startPosition:0},0).to({_off:true},9).wait(8).to({_off:false,x:1003.55,y:330.85},0).to({_off:true},8).wait(2).to({_off:false,regX:0,regY:0,x:305.8,y:294.65,mode:"independent"},0).to({_off:true},8).wait(4).to({_off:false,x:398.2},0).to({_off:true},8).wait(4).to({_off:false,x:489.8,y:294.2},0).to({_off:true},9).wait(8).to({_off:false,x:612.55,y:310.15},0).to({_off:true},10).wait(16).to({_off:false,x:778.85,y:294.2},0).to({_off:true},9).wait(4).to({_off:false,regX:8.3,regY:20.7,x:878.85,y:314.9,mode:"synched",startPosition:0},0).to({_off:true},9).wait(8).to({_off:false,x:1003.55,y:330.85},0).to({_off:true},8).wait(3).to({_off:false,regX:0,regY:0,x:275.5,y:493.75,mode:"independent"},0).to({_off:true},9).wait(4).to({_off:false,x:370.5},0).to({_off:true},8).wait(4).to({_off:false,x:466.3},0).to({_off:true},8).wait(8).to({_off:false,x:593.85,y:509.25},0).to({_off:true},12).wait(15).to({_off:false,x:767.3,y:493.75},0).to({_off:true},8).wait(4).to({_off:false,regX:8.3,regY:20.7,x:871.7,y:514.45,mode:"synched",startPosition:0},0).to({_off:true},8).wait(8).to({_off:false,x:999.8,y:529.95},0).wait(12).to({regX:0,regY:0,x:275.5,y:493.75,mode:"independent"},0).to({_off:true},8).wait(4).to({_off:false,x:370.5},0).to({_off:true},8).wait(4).to({_off:false,x:466.3},0).to({_off:true},8).wait(8).to({_off:false,x:593.85,y:509.25},0).to({_off:true},12).wait(15).to({_off:false,x:767.3,y:493.75},0).to({_off:true},8).wait(4).to({_off:false,regX:8.3,regY:20.7,x:871.7,y:514.45,mode:"synched",startPosition:0},0).to({_off:true},8).wait(8).to({_off:false,x:999.8,y:529.95},0).wait(12).to({regX:0,regY:0,x:305.8,y:294.65,mode:"independent"},0).to({_off:true},8).wait(4).to({_off:false,x:398.2},0).to({_off:true},8).wait(4).to({_off:false,x:489.8,y:294.2},0).to({_off:true},9).wait(8).to({_off:false,x:612.55,y:310.15},0).to({_off:true},10).wait(16).to({_off:false,x:778.85,y:294.2},0).to({_off:true},9).wait(4).to({_off:false,regX:8.3,regY:20.7,x:878.85,y:314.9,mode:"synched",startPosition:0},0).to({_off:true},9).wait(8).to({_off:false,x:1003.55,y:330.85},0).to({_off:true},8).wait(2).to({_off:false,regX:0,regY:0,x:305.8,y:294.65,mode:"independent"},0).to({_off:true},8).wait(4).to({_off:false,x:398.2},0).to({_off:true},8).wait(4).to({_off:false,x:489.8,y:294.2},0).to({_off:true},9).wait(8).to({_off:false,x:612.55,y:310.15},0).to({_off:true},10).wait(16).to({_off:false,x:778.85,y:294.2},0).to({_off:true},9).wait(4).to({_off:false,regX:8.3,regY:20.7,x:878.85,y:314.9,mode:"synched",startPosition:0},0).to({_off:true},9).wait(8).to({_off:false,x:1003.55,y:330.85},0).to({_off:true},8).wait(3).to({_off:false,regX:0,regY:0,x:275.5,y:493.75,mode:"independent"},0).to({_off:true},9).wait(4).to({_off:false,x:370.5},0).to({_off:true},8).wait(4).to({_off:false,x:466.3},0).to({_off:true},8).wait(8).to({_off:false,x:593.85,y:509.25},0).to({_off:true},12).wait(15).to({_off:false,x:767.3,y:493.75},0).to({_off:true},8).wait(4).to({_off:false,regX:8.3,regY:20.7,x:871.7,y:514.45,mode:"synched",startPosition:0},0).to({_off:true},8).wait(8).to({_off:false,x:999.8,y:529.95},0).wait(12).to({regX:0,regY:0,x:275.5,y:493.75,mode:"independent"},0).to({_off:true},8).wait(4).to({_off:false,x:370.5},0).to({_off:true},8).wait(4).to({_off:false,x:466.3},0).to({_off:true},8).wait(8).to({_off:false,x:593.85,y:509.25},0).to({_off:true},12).wait(15).to({_off:false,x:767.3,y:493.75},0).to({_off:true},8).wait(4).to({_off:false,regX:8.3,regY:20.7,x:871.7,y:514.45,mode:"synched",startPosition:0},0).to({_off:true},8).wait(8).to({_off:false,x:999.8,y:529.95},0).to({_off:true},16).wait(178).to({_off:false,regX:0,regY:0,x:305.8,y:294.65,mode:"independent"},0).to({_off:true},10).wait(4).to({_off:false,x:398.2},0).to({_off:true},8).wait(4).to({_off:false,x:489.8,y:294.2},0).to({_off:true},9).wait(8).to({_off:false,x:612.55,y:310.15},0).to({_off:true},10).wait(16).to({_off:false,x:778.85,y:294.2},0).to({_off:true},9).wait(4).to({_off:false,regX:8.3,regY:20.7,x:878.85,y:314.9,mode:"synched",startPosition:0},0).to({_off:true},9).wait(8).to({_off:false,x:1003.55,y:330.85},0).to({_off:true},8).wait(2).to({_off:false,regX:0,regY:0,x:275.5,y:493.75,mode:"independent"},0).to({_off:true},9).wait(4).to({_off:false,x:370.5},0).to({_off:true},8).wait(4).to({_off:false,x:466.3},0).to({_off:true},8).wait(8).to({_off:false,x:593.85,y:509.25},0).to({_off:true},12).wait(15).to({_off:false,x:767.3,y:493.75},0).to({_off:true},8).wait(4).to({_off:false,regX:8.3,regY:20.7,x:871.7,y:514.45,mode:"synched",startPosition:0},0).to({_off:true},8).wait(8).to({_off:false,x:999.8,y:529.95},0).wait(12).to({regX:0,regY:0,x:305.8,y:294.65,mode:"independent"},0).to({_off:true},8).wait(4).to({_off:false,x:398.2},0).to({_off:true},8).wait(4).to({_off:false,x:489.8,y:294.2},0).to({_off:true},9).wait(8).to({_off:false,x:612.55,y:310.15},0).to({_off:true},10).wait(16).to({_off:false,x:778.85,y:294.2},0).to({_off:true},9).wait(4).to({_off:false,regX:8.3,regY:20.7,x:878.85,y:314.9,mode:"synched",startPosition:0},0).to({_off:true},9).wait(8).to({_off:false,x:1003.55,y:330.85},0).to({_off:true},8).wait(2).to({_off:false,regX:0,regY:0,x:275.5,y:493.75,mode:"independent"},0).to({_off:true},9).wait(4).to({_off:false,x:370.5},0).to({_off:true},8).wait(4).to({_off:false,x:466.3},0).to({_off:true},8).wait(8).to({_off:false,x:593.85,y:509.25},0).to({_off:true},12).wait(15).to({_off:false,x:767.3,y:493.75},0).to({_off:true},8).wait(4).to({_off:false,regX:8.3,regY:20.7,x:871.7,y:514.45,mode:"synched",startPosition:0},0).to({_off:true},8).wait(8).to({_off:false,x:999.8,y:529.95},0).wait(12).to({startPosition:0},0).to({_off:true},14).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false,x:459.05,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,x:550.9,y:297.15},0).wait(4).to({x:581.9,y:308.3},0).to({_off:true},4).wait(35).to({_off:false,x:840.8,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,regX:14.3,regY:21.7,x:946.45,y:319.1,mode:"synched",startPosition:0},0).wait(4).to({x:977.7,y:330},0).to({_off:true},4).wait(19).to({_off:false,regX:0,regY:0,x:338.8,y:491.9,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:434.05},0).to({_off:true},4).wait(8).to({_off:false,x:530,y:496.25},0).wait(4).to({x:562.1,y:507.4},0).to({_off:true},4).wait(35).to({_off:false,x:830.9,y:491.9},0).to({_off:true},4).wait(8).to({_off:false,regX:14.3,regY:21.7,x:942.05,y:518.2,mode:"synched",startPosition:0},0).wait(4).to({x:974.95,y:529.1},0).to({_off:true},4).wait(20).to({_off:false,regX:0,regY:0,x:367.4,y:292.8,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:459.05,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,x:550.9,y:297.15},0).wait(4).to({x:581.9,y:308.3},0).to({_off:true},4).wait(35).to({_off:false,x:840.8,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,regX:14.3,regY:21.7,x:946.45,y:319.1,mode:"synched",startPosition:0},0).wait(4).to({x:977.7,y:330},0).to({_off:true},4).wait(19).to({_off:false,regX:0,regY:0,x:338.8,y:491.9,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:434.05},0).to({_off:true},4).wait(8).to({_off:false,x:530,y:496.25},0).wait(4).to({x:562.1,y:507.4},0).to({_off:true},4).wait(35).to({_off:false,x:830.9,y:491.9},0).to({_off:true},4).wait(8).to({_off:false,regX:14.3,regY:21.7,x:942.05,y:518.2,mode:"synched",startPosition:0},0).wait(4).to({x:974.95,y:529.1},0).to({_off:true},4).wait(209).to({_off:false,regX:0,regY:0,x:367.4,y:292.8,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:459.05,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,x:550.9,y:297.15},0).wait(4).to({x:581.9,y:308.3},0).to({_off:true},4).wait(35).to({_off:false,x:840.8,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,regX:14.3,regY:21.7,x:946.45,y:319.1,mode:"synched",startPosition:0},0).wait(4).to({x:977.7,y:330},0).to({_off:true},4).wait(19).to({_off:false,regX:0,regY:0,x:338.8,y:491.9,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:434.05},0).to({_off:true},4).wait(8).to({_off:false,x:530,y:496.25},0).wait(4).to({x:562.1,y:507.4},0).to({_off:true},4).wait(35).to({_off:false,x:830.9,y:491.9},0).to({_off:true},4).wait(8).to({_off:false,regX:14.3,regY:21.7,x:942.05,y:518.2,mode:"synched",startPosition:0},0).wait(4).to({x:974.95,y:529.1},0).to({_off:true},4).wait(20).to({_off:false,regX:0,regY:0,x:367.4,y:292.8,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:459.05,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,x:550.9,y:297.15},0).wait(4).to({x:581.9,y:308.3},0).to({_off:true},4).wait(35).to({_off:false,x:840.8,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,regX:14.3,regY:21.7,x:946.45,y:319.1,mode:"synched",startPosition:0},0).wait(4).to({x:977.7,y:330},0).to({_off:true},4).wait(19).to({_off:false,regX:0,regY:0,x:338.8,y:491.9,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:434.05},0).to({_off:true},4).wait(8).to({_off:false,x:530,y:496.25},0).wait(4).to({x:562.1,y:507.4},0).to({_off:true},4).wait(35).to({_off:false,x:830.9,y:491.9},0).to({_off:true},4).wait(8).to({_off:false,regX:14.3,regY:21.7,x:942.05,y:518.2,mode:"synched",startPosition:0},0).wait(4).to({x:974.95,y:529.1},0).to({_off:true},4).wait(210).to({_off:false,regX:0,regY:0,x:367.4,y:292.8,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:459.05,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,x:550.9,y:297.15},0).wait(4).to({x:581.9,y:308.3},0).to({_off:true},4).wait(35).to({_off:false,x:840.8,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,regX:14.3,regY:21.7,x:946.45,y:319.1,mode:"synched",startPosition:0},0).wait(4).to({x:977.7,y:330},0).to({_off:true},4).wait(18).to({_off:false,regX:0,regY:0,x:367.4,y:292.8,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:459.05,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,x:550.9,y:297.15},0).wait(4).to({x:581.9,y:308.3},0).to({_off:true},4).wait(35).to({_off:false,x:840.8,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,regX:14.3,regY:21.7,x:946.45,y:319.1,mode:"synched",startPosition:0},0).wait(4).to({x:977.7,y:330},0).to({_off:true},4).wait(20).to({_off:false,regX:0,regY:0,x:338.8,y:491.9,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:434.05},0).to({_off:true},4).wait(8).to({_off:false,x:530,y:496.25},0).wait(4).to({x:562.1,y:507.4},0).to({_off:true},4).wait(35).to({_off:false,x:830.9,y:491.9},0).to({_off:true},4).wait(8).to({_off:false,regX:14.3,regY:21.7,x:942.05,y:518.2,mode:"synched",startPosition:0},0).wait(4).to({x:974.95,y:529.1},0).to({_off:true},4).wait(20).to({_off:false,regX:0,regY:0,x:338.8,y:491.9,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:434.05},0).to({_off:true},4).wait(8).to({_off:false,x:530,y:496.25},0).wait(4).to({x:562.1,y:507.4},0).to({_off:true},4).wait(35).to({_off:false,x:830.9,y:491.9},0).to({_off:true},4).wait(8).to({_off:false,regX:14.3,regY:21.7,x:942.05,y:518.2,mode:"synched",startPosition:0},0).wait(4).to({x:974.95,y:529.1},0).to({_off:true},4).wait(20).to({_off:false,regX:0,regY:0,x:367.4,y:292.8,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:459.05,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,x:550.9,y:297.15},0).wait(4).to({x:581.9,y:308.3},0).to({_off:true},4).wait(35).to({_off:false,x:840.8,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,regX:14.3,regY:21.7,x:946.45,y:319.1,mode:"synched",startPosition:0},0).wait(4).to({x:977.7,y:330},0).to({_off:true},4).wait(18).to({_off:false,regX:0,regY:0,x:367.4,y:292.8,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:459.05,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,x:550.9,y:297.15},0).wait(4).to({x:581.9,y:308.3},0).to({_off:true},4).wait(35).to({_off:false,x:840.8,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,regX:14.3,regY:21.7,x:946.45,y:319.1,mode:"synched",startPosition:0},0).wait(4).to({x:977.7,y:330},0).to({_off:true},4).wait(20).to({_off:false,regX:0,regY:0,x:338.8,y:491.9,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:434.05},0).to({_off:true},4).wait(8).to({_off:false,x:530,y:496.25},0).wait(4).to({x:562.1,y:507.4},0).to({_off:true},4).wait(35).to({_off:false,x:830.9,y:491.9},0).to({_off:true},4).wait(8).to({_off:false,regX:14.3,regY:21.7,x:942.05,y:518.2,mode:"synched",startPosition:0},0).wait(4).to({x:974.95,y:529.1},0).to({_off:true},4).wait(20).to({_off:false,regX:0,regY:0,x:338.8,y:491.9,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:434.05},0).to({_off:true},4).wait(8).to({_off:false,x:530,y:496.25},0).wait(4).to({x:562.1,y:507.4},0).to({_off:true},4).wait(35).to({_off:false,x:830.9,y:491.9},0).to({_off:true},4).wait(8).to({_off:false,regX:14.3,regY:21.7,x:942.05,y:518.2,mode:"synched",startPosition:0},0).wait(4).to({x:974.95,y:529.1},0).to({_off:true},4).wait(204).to({_off:false,regX:0,regY:0,x:367.4,y:292.8,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:459.05,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,x:550.9,y:297.15},0).wait(4).to({x:581.9,y:308.3},0).to({_off:true},4).wait(35).to({_off:false,x:840.8,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,regX:14.3,regY:21.7,x:946.45,y:319.1,mode:"synched",startPosition:0},0).wait(4).to({x:977.7,y:330},0).to({_off:true},4).wait(19).to({_off:false,regX:0,regY:0,x:338.8,y:491.9,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:434.05},0).to({_off:true},4).wait(8).to({_off:false,x:530,y:496.25},0).wait(4).to({x:562.1,y:507.4},0).to({_off:true},4).wait(35).to({_off:false,x:830.9,y:491.9},0).to({_off:true},4).wait(8).to({_off:false,regX:14.3,regY:21.7,x:942.05,y:518.2,mode:"synched",startPosition:0},0).wait(4).to({x:974.95,y:529.1},0).to({_off:true},4).wait(20).to({_off:false,regX:0,regY:0,x:367.4,y:292.8,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:459.05,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,x:550.9,y:297.15},0).wait(4).to({x:581.9,y:308.3},0).to({_off:true},4).wait(35).to({_off:false,x:840.8,y:292.35},0).to({_off:true},4).wait(9).to({_off:false,regX:14.3,regY:21.7,x:946.45,y:319.1,mode:"synched",startPosition:0},0).wait(4).to({x:977.7,y:330},0).to({_off:true},4).wait(19).to({_off:false,regX:0,regY:0,x:338.8,y:491.9,mode:"independent"},0).to({_off:true},4).wait(8).to({_off:false,x:434.05},0).to({_off:true},4).wait(8).to({_off:false,x:530,y:496.25},0).wait(4).to({x:562.1,y:507.4},0).to({_off:true},4).wait(35).to({_off:false,x:830.9,y:491.9},0).to({_off:true},4).wait(8).to({_off:false,regX:14.3,regY:21.7,x:942.05,y:518.2,mode:"synched",startPosition:0},0).wait(4).to({x:974.95,y:529.1},0).to({_off:true},4).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(226).to({_off:false},0).to({_off:true},4).wait(104).to({_off:false,x:672.5,y:511.75},0).to({_off:true},4).wait(103).to({_off:false,x:687.9,y:312.65},0).to({_off:true},4).wait(104).to({_off:false,x:672.5,y:511.75},0).to({_off:true},4).wait(292).to({_off:false,x:687.9,y:312.65},0).to({_off:true},4).wait(104).to({_off:false,x:672.5,y:511.75},0).to({_off:true},4).wait(103).to({_off:false,x:687.9,y:312.65},0).to({_off:true},4).wait(104).to({_off:false,x:672.5,y:511.75},0).to({_off:true},4).wait(293).to({_off:false,x:687.9,y:312.65},0).to({_off:true},4).wait(103).to({_off:false},0).to({_off:true},4).wait(105).to({_off:false,x:672.5,y:511.75},0).to({_off:true},4).wait(103).to({_off:false},0).to({_off:true},4).wait(103).to({_off:false,x:687.9,y:312.65},0).to({_off:true},4).wait(103).to({_off:false},0).to({_off:true},4).wait(105).to({_off:false,x:672.5,y:511.75},0).to({_off:true},4).wait(103).to({_off:false},0).to({_off:true},4).wait(287).to({_off:false,x:687.9,y:312.65},0).to({_off:true},4).wait(104).to({_off:false,x:672.5,y:511.75},0).to({_off:true},4).wait(103).to({_off:false,x:687.9,y:312.65},0).to({_off:true},4).wait(104).to({_off:false,x:672.5,y:511.75},0).to({_off:true},4).wait(77));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(230).to({_off:false},0).to({_off:true},9).wait(99).to({_off:false,x:703.2,y:513},0).to({_off:true},9).wait(98).to({_off:false,x:718.05,y:313.9},0).to({_off:true},9).wait(99).to({_off:false,x:703.2,y:513},0).to({_off:true},9).wait(287).to({_off:false,x:718.05,y:313.9},0).to({_off:true},9).wait(99).to({_off:false,x:703.2,y:513},0).to({_off:true},9).wait(98).to({_off:false,x:718.05,y:313.9},0).to({_off:true},9).wait(99).to({_off:false,x:703.2,y:513},0).to({_off:true},9).wait(288).to({_off:false,x:718.05,y:313.9},0).to({_off:true},9).wait(98).to({_off:false},0).to({_off:true},9).wait(100).to({_off:false,x:703.2,y:513},0).to({_off:true},9).wait(98).to({_off:false},0).to({_off:true},9).wait(98).to({_off:false,x:718.05,y:313.9},0).to({_off:true},9).wait(98).to({_off:false},0).to({_off:true},9).wait(100).to({_off:false,x:703.2,y:513},0).to({_off:true},9).wait(98).to({_off:false},0).to({_off:true},9).wait(282).to({_off:false,x:718.05,y:313.9},0).to({_off:true},9).wait(99).to({_off:false,x:703.2,y:513},0).to({_off:true},9).wait(98).to({_off:false,x:718.05,y:313.9},0).to({_off:true},9).wait(99).to({_off:false,x:703.2,y:513},0).to({_off:true},9).wait(68));

	// 악보
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiwCyIAAljIFhAAIAAFjg");
	this.shape_11.setTransform(238.1457,480.5,1.507,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiwCyIAAljIFhAAIAAFjg");
	this.shape_12.setTransform(245.55,277.3);

	this.instance_4 = new lib.비트맵8();
	this.instance_4.setTransform(200,125);

	this.stop1_btn = new lib.정지();
	this.stop1_btn.name = "stop1_btn";
	this.stop1_btn.setTransform(1189.3,49.5,0.6044,0.6044,0,0,0,47.1,47.1);
	new cjs.ButtonHelper(this.stop1_btn, 0, 1, 2);

	this.pause_btn = new lib.일시정지();
	this.pause_btn.name = "pause_btn";
	this.pause_btn.setTransform(1145.7,59.9,0.6044,0.6044,0,0,0,90.4,64.3);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2);

	this.play_btn = new lib.플레이();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(1048.5,49.5,0.6044,0.6044,0,0,0,47,47.1);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#333333").ss(1.5,1,1).p("EgABgw0MAADBhp");
	this.shape_13.setTransform(1279.575,445.6589,1,1.124);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("EBj/AwuIgIAOMjH1AAAIAAgOMAAAhhp");
	this.shape_14.setTransform(639.875,446.4458,1,1.124);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ehj+Aw1MAAAhhpMDH5AAAMAAEBhpg");
	this.shape_15.setTransform(639.875,445.6589,1,1.124);

	this.singAlong_btn = new lib.따라부르기미선택();
	this.singAlong_btn.name = "singAlong_btn";
	this.singAlong_btn.setTransform(722,72.3,1,1,0,0,0,75.8,29.1);
	new cjs.ButtonHelper(this.singAlong_btn, 0, 1, 1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AA3BdIAAi5IAeAAIAAC5gAhUAYQAmgBATgYQARgXAAgpIhIAAIAAgbIBmAAIAAAVQAABFgkAfQgaAWgqACg");
	this.shape_16.setTransform(444.95,68.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhGBbQgHAAgDgDQgEgEAAgJIAAg1ICpAAIAAAbIiKAAIAAAQICKAAIAAAagAhaAKIAAgZIC1AAIAAAZgAAOgbIhUAAQgHAAgDgDQgEgEAAgJIAAgvICpAAIAAAaIiKAAIAAAMICKAAIAAAZg");
	this.shape_17.setTransform(422.95,68.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AA4BcIAAhjIgMAAIAABjIgcAAIAAgpIACAAIAAgaIgCAAIAAh0IAcAAIAAA5IAMAAIAAg5IAdAAIAAC3gAAQAzIAAgaIACAAIAAAagAhGAzQgHAAgDgDQgEgEAAgJIAAhGIA5AAIAAgdIg5AAIAAgbIBWAAIAABSIg4AAIAAAiIBGAAIAAAagAAQAZg");
	this.shape_18.setTransform(393.6,68.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhbBXIAAgbIBNAAIAAgyIgzAAQgHAAgDgDQgEgEgBgIIAAhRIAfAAIAABGICBAAIAAAaIhBAAIAAgCIgdAAIAAACIAdAAIgdAAIAAgCIAdAAIAAACIAAAyIBNAAIAAAbg");
	this.shape_19.setTransform(371.6,68.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ar1EjIAAmxQAAiUCTAAITFAAQCTAAAACUIAAGxg");
	this.shape_20.setTransform(408.4,67.2);

	this.sing_btn = new lib.노래부르기_미선택();
	this.sing_btn.name = "sing_btn";
	this.sing_btn.setTransform(878.8,72.3,1,1,0,0,0,75.8,29.1);
	new cjs.ButtonHelper(this.sing_btn, 0, 1, 1);

	this.expert_btn = new lib.전문가_미선택();
	this.expert_btn.name = "expert_btn";
	this.expert_btn.setTransform(565.2,72.3,1,1,0,0,0,75.8,29.1);
	new cjs.ButtonHelper(this.expert_btn, 0, 1, 1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape_21.setTransform(288.4,56.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AiEBsIAAgTIBMAAIAAhMIgCgCQgYgTAAgdQAAgdAYgVQAYgUAiAAQAiAAAZAUQAYAVAAAdQAAAdgYATIgDADIAABLIBNAAIAAATgAgjBZIBGAAIAAg/QgQAGgTAAQgTAAgQgGgAgrhJQgSAPAAAVQAAAVASAPQATAOAYAAQAZAAASgOQASgPAAgVQAAgVgSgPQgSgPgZAAQgYAAgTAPg");
	this.shape_22.setTransform(269.875,45.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABXCLIAAivIg0AAQgBAmgTAXQgTAWggAAQgiABgTgYQgSgYAAglQAAgmASgZQATgYAiAAQAiAAASAYQAOATAEAaIA1AAIAAhSIAVAAIAAEUgAhJhXQgMATAAAfQAAAdAMASQAMASAZAAQAZAAAMgSQAMgSAAgdQAAgfgMgSQgLgTgaAAQgZAAgMASg");
	this.shape_23.setTransform(238.825,47.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhSCJIAAhCICPAAIAAgZIiPAAIAAgUIClAAIAABAIiQAAIAAAcICWAAIAAATgAiEAAIAAgTIEJAAIAAATgAhSgwIAAhYICjAAIAAATIiNAAIAAAyICRAAIAAATg");
	this.shape_24.setTransform(211.775,47.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ABWCLIAAiFIg7AAQgFALgHAIQgTAWggAAQgiABgTgYQgSgYAAglQAAgmASgZQATgYAiAAQAiAAASAYQAGAIADAIIA9AAIAAg1IAWAAIAAEUgAhJhXQgMATAAAfQAAAdAMASQAMASAZAAQAZAAAMgSQAMgSAAgdQAAgfgMgSQgLgTgaAAQgZAAgMASgAAjglQAAANgDAMIA2AAIAAg1Ig2AAQADANAAAPg");
	this.shape_25.setTransform(171.725,47.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhSCMIAAhCICPAAIAAgZIiPAAIAAgUIBLAAIAAgcIh9AAIAAgSIEIAAIAAASIh3AAIAAAcIBGAAIAABAIiPAAIAAAbICVAAIAAAUgAg6gyQgZgOAAgYQAAgYAZgNQAZgOAhAAQAkAAAXAPQAXAQAAAUQAAAXgZAOQgYAOghAAQgiAAgYgNgAgqhwQgSAJAAAPQAAAPASAIQATAJAXAAQAWAAATgJQATgIAAgPQAAgPgTgJQgTgIgWAAQgXAAgTAIg");
	this.shape_26.setTransform(144.65,47.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ABXCLIAAkUIAVAAIAAEUgAhrArQAYgOATgPQAVgPAPgWQAMgPAHgTQAJgUABgWIhgAAIAAgTIB4AAQAAAYgKAeQgKAegPAXQgOATgXATQgXAUgXANg");
	this.shape_27.setTransform(113.65,47.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ABbCLIAAh+IgRADIgXACIgYABIgVAAIgPAAIAAB1IgVAAIAAh1IhRAAIAAgTIB1AAIADAAQAGgQAEggQAFggAAgcIhvAAIAAgTICFAAQgBAjgEAjQgEAhgGAYIAVAAIAVgBIASgFIAAiDIAVAAIAAEUg");
	this.shape_28.setTransform(75.275,47.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape_29.setTransform(50,56.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAMBuIAAjDIghAcIgNgNIAugnIAXAAIAADbg");
	this.shape_30.setTransform(36.3,46);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("Ehj/AHbIAAu1MDH/AAAIAAO1g");
	this.shape_31.setTransform(640,47.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("EBj/gw7IgEGHMAAEBbiIgIAOMjH1AAAIAAgOMAAAhhp");
	this.shape_32.setTransform(639.875,447.5756,1,1.1277);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ehj+Aw1MAAAhhpMDH1AAAIAEGHMAAEBbig");
	this.shape_33.setTransform(639.875,446.7863,1,1.1277);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAyBUIAAinIAbAAIAACngAhNAWQAjgBARgWQAQgVABglIhCAAIAAgYIBdAAIAAATQgBA+ggAcQgYAVgnACg");
	this.shape_34.setTransform(615.9,68.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag/BTQgHAAgDgDQgDgEgBgIIAAgwICaAAIAAAYIh+AAIAAAPIB+AAIAAAYgAhSAJIAAgXIClAAIAAAXgAANgYIhMAAQgHAAgDgDQgDgEgBgIIAAgrICaAAIAAAXIh+AAIAAALIB+AAIAAAYg");
	this.shape_35.setTransform(595.9,68.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgiBOQgRgPAAgXQAAgXARgPQAKgHAMgEIgFgCQgOgHgHgMQgHAMgPAHQgOAHgOABIAAgaQAPgCAIgHQAHgGADgJIggAAIAAgXIAjAAIAAgPIAcAAIAAAPIAjAAIAAAXIghAAQADAJAIAGQAJAHANACIAAASIgHAAQgIAAgIACQALAFAMABIAAgIQARACAOALQASAPAAAXQAAAXgSAPQgQAPgWAAQgWAAgQgPgAgOAVQgJAIAAALQAAAMAJAHQAIAIAKAAQALAAAIgIQAJgHAAgMQAAgLgJgIQgIgHgLAAQgKAAgIAHgAAngDIAAhQIAcAAIAAAcIAWAAIAAAZIgWAAIAAAbgAgMgJQAIgCAIAAIAHAAIAAAIQgMgBgLgFgAALgLIAAAAg");
	this.shape_36.setTransform(576.975,68.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAnBTIAAilIAcAAIAAA5IAVAAIAAAYIgVAAIAABUgAhXAXQAigBARgWQARgVgBglIhBAAIAAgYIBcAAIAAATQABA+ghAcQgZAVglACg");
	this.shape_37.setTransform(550.35,68.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ag/BTQgHAAgDgDQgEgEAAgIIAAgpIAcAAIAAAfIB/AAIAAAZgAgKApIAAgaIhIAAIAAgXIClAAIAAAXIhDAAIAAAagAg/gUQgHAAgDgDQgEgDAAgIIAAgwICbAAIAAAwQAAAJgEACQgDADgHAAgAgygpIBlAAIAAgTIhlAAg");
	this.shape_38.setTransform(529.25,68.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ag1BTQgHAAgDgDQgEgEAAgIIAAguIAcAAIAAAkIB2AAIAAAZgAAyAfIAAg6IgYAAIAAgYIAYAAIAAgfIAcAAIAABxgAgGgBQgOgIgHgOQgIANgPAKQgOAGgOABIAAgZQASgDAJgLQAHgKACgQIgjAAIAAgYIBiAAIAAAYIgiAAQACAQAHAKQAIALASADIAAAZQgQgBgMgHg");
	this.shape_39.setTransform(509.225,68.15);

	this.stop2_btn = new lib.정지();
	this.stop2_btn.name = "stop2_btn";
	this.stop2_btn.setTransform(1189.3,49.5,0.6044,0.6044,0,0,0,47.1,47.1);
	new cjs.ButtonHelper(this.stop2_btn, 0, 1, 2);

	this.listen_btn = new lib.노래듣기_미선택();
	this.listen_btn.name = "listen_btn";
	this.listen_btn.setTransform(408.4,72.25,1,1,0,0,0,75.8,29.1);
	new cjs.ButtonHelper(this.listen_btn, 0, 1, 1);

	this.stop3_btn = new lib.정지();
	this.stop3_btn.name = "stop3_btn";
	this.stop3_btn.setTransform(1189.3,49.5,0.6044,0.6044,0,0,0,47.1,47.1);
	new cjs.ButtonHelper(this.stop3_btn, 0, 1, 2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AA3BdIAAi5IAeAAIAAC5gAhUAYQAmgBATgYQASgXAAgpIhIAAIAAgbIBlAAIAAAVQAABFgkAfQgaAWgqACg");
	this.shape_40.setTransform(769.55,68.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhbBXIAAgbIC3AAIAAAbgAhBAdQgHAAgEgEQgDgDAAgJIAAg3ICAAAIAAgRIiAAAIAAgbICeAAIAABGIiAAAIAAASICAAAIAAAbg");
	this.shape_41.setTransform(747.55,68.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgPBcIAAg6IhMAAIAAgbIC2AAIAAAbIhMAAIAAA6gAhGgJQgHAAgEgDQgDgEAAgJIAAhCIAeAAIAAARIBtAAIAAgRIAeAAIAABCQAAAJgEAEQgDADgIAAgAg2gkIBtAAIAAgPIhtAAg");
	this.shape_42.setTransform(725.55,68.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AArBcIAAgpIh9AAQgHAAgEgDQgDgEAAgJIAAhGIBMAAIAAgdIhMAAIAAgbIBpAAIAABSIhLAAIAAAiIBtAAIAAh0IAeAAIAAA/IAYAAIAAAbIgYAAIAABdgAAxAzIAAgaIgGAAIAAAaIAGAAgAAxAzIgGAAIAAgaIAGAAIAAAagAArAzg");
	this.shape_43.setTransform(697.425,68.875);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAtBcIAAgmIAEAAIAAgaIgEAAIAAAaIg7AAQgHAAgEgDQgDgEAAgIIAAiCIAzAAIAAAbIgXAAIAABcIAtAAIAAh3IAeAAIAAA/IAYAAIAAAbIgYAAIAABdgAAtA2IAAgaIAEAAIAAAagAAtA2gAhUA2QgHAAgDgDQgEgEAAgIIAAiCIA/AAIAAAbIgiAAIAABcIAiAAIAAAag");
	this.shape_44.setTransform(675.25,68.875);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ar1EiIAAmwQAAiUCTAAITFAAQCTAAAACUIAAGwg");
	this.shape_45.setTransform(722,67.25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("EBkAg3EIgDFdIAABUEBj9A29IgEAIMjH4AAAIAAgIMAAAht6EBj9gwEMAADBnB");
	this.shape_46.setTransform(640,447.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("EBj8A3DMjH7AAAMAAAht6IAAgLMDH4AAAIAEFhIgBBUIAAAPMAAEBnBg");
	this.shape_47.setTransform(640,447);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhFBbQgIAAgDgDQgEgEAAgJIAAg1ICpAAIAAAbIiKAAIAAAQICKAAIAAAagAhbAKIAAgZIC3AAIAAAZgAAOgbIhTAAQgIAAgDgDQgEgEAAgJIAAgvICpAAIAAAaIiKAAIAAAMICKAAIAAAZg");
	this.shape_48.setTransform(893.35,68.825);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgOBcIAAg6IhNAAIAAgbIC3AAIAAAbIhNAAIAAA6gAAmgQQgcgGgKgNQgJANgcAGQgVAFgaACIAAgbQAdgCARgGQAUgHAAgNIhCAAIAAgbICpAAIAAAbIhCAAQAAAMAUAHQARAIAdAAIAAAcQgbgBgUgGg");
	this.shape_49.setTransform(864,68.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AhHBbQgIAAgDgDQgEgEAAgJIAAgyIAeAAIAAAnICCAAIAAAbgAArAiIAAh8IAeAAIAAAlIAYAAIAAAbIgYAAIAAA8gAhSAGQgHAAgEgEQgDgCAAgJIAAhRIAeAAIAAAVIAwAAIAAgVIAdAAIAABRQAAAJgEACQgEAEgGAAgAhCgUIAwAAIAAgXIgwAAg");
	this.shape_50.setTransform(843.225,68.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.expert_btn},{t:this.sing_btn},{t:this.shape_20,p:{x:408.4,y:67.2}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.singAlong_btn},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.play_btn},{t:this.pause_btn},{t:this.stop1_btn},{t:this.instance_4},{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.sing_btn},{t:this.shape_20,p:{x:565,y:65.95}},{t:this.singAlong_btn},{t:this.listen_btn},{t:this.play_btn},{t:this.pause_btn},{t:this.stop2_btn},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{scaleY:1.1277,y:446.7863}},{t:this.shape_32,p:{scaleY:1.1277,y:447.5756}},{t:this.instance_4},{t:this.shape_12},{t:this.shape_11}]},619).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.sing_btn},{t:this.shape_45,p:{x:722}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40,p:{x:769.55}},{t:this.listen_btn},{t:this.expert_btn},{t:this.play_btn},{t:this.pause_btn},{t:this.stop3_btn},{t:this.shape_33,p:{scaleY:1.1259,y:446.2224}},{t:this.shape_32,p:{scaleY:1.1259,y:447.0106}},{t:this.instance_4},{t:this.shape_12},{t:this.shape_11}]},620).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.expert_btn},{t:this.singAlong_btn},{t:this.listen_btn},{t:this.shape_45,p:{x:878.8}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_40,p:{x:915.35}},{t:this.play_btn},{t:this.pause_btn},{t:this.stop1_btn},{t:this.shape_47},{t:this.shape_46},{t:this.instance_4},{t:this.shape_12},{t:this.shape_11}]},1055).wait(619));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(639,400,642,401.79999999999995);
// library properties:
lib.properties = {
	id: '52D6FCDDF011AF4EB2081112E7085B10',
	width: 1280,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/비트맵8.png", id:"비트맵8"},
		{src:"sounds/y2matecom1어깨동무노래듣기.mp3", id:"y2matecom1어깨동무노래듣기"},
		{src:"sounds/어깨동무따라부르기_.mp3", id:"어깨동무따라부르기_"},
		{src:"sounds/어깨동무노래부르기반주_.mp3", id:"어깨동무노래부르기반주_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['52D6FCDDF011AF4EB2081112E7085B10'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
