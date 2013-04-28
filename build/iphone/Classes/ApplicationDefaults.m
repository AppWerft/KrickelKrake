/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"Uy48DaSMqGuKzsKFFbzBB6PxJpwgpHaP"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"pkAM2qbhcRIbdMzsNi8uVghqJwBHf4mg"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"crxeetmer5zMpecgOspCxv5aVL4fOzG6"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"5oqAdrGDmNLLsyGiNGgtNJtOvQddHHLl"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"vNpm8xXbYxUxh14VPcIAPQqYZrmRyWjX"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"WyZNlJ6cXQOXBdHyVUQ5URJqSMXKmH4I"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
