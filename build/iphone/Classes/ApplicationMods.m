#import "ApplicationMods.h"

@implementation ApplicationMods

+ (NSArray*) compiledMods
{
	NSMutableArray *modules = [NSMutableArray array];
	[modules addObject:[NSDictionary dictionaryWithObjectsAndKeys:@"ti.cloud",@"name",@"ti.cloud",@"moduleid",@"2.0.1",@"version",@"1056b5d2-2bb5-4339-b930-297637aeec4e",@"guid",@"",@"licensekey",nil]];
	[modules addObject:[NSDictionary dictionaryWithObjectsAndKeys:@"paint",@"name",@"ti.paint",@"moduleid",@"1.3",@"version",@"43f13063-d426-4e9c-8a7a-72dc5e4aec57",@"guid",@"",@"licensekey",nil]];
	return modules;
}

@end
